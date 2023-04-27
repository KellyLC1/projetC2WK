const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.userData.userId
  });
  product.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Product created successfully",
        createdProduct: {
          _id: result._id,
          name: result.name,
          price: result.price,
          user: result.user
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.updateProductById = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.updateOne({ _id: id, user: req.userData.userId }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ message: "Product updated" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.deleteProductById = (req, res, next) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id, user: req.userData.userId })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ message: "Product deleted" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllByUser = async (req, res) => {
  const userID = req.params.userID;
  try {
    const products = await Product.find({ userID });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
