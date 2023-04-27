const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a product and associate it with the current user
router.post('/product/create', authMiddleware, productController.createProduct);

// Get a product by id
router.get('/product/:id', productController.getProductById);

// Update a product by id
router.put('/product/:id', authMiddleware, productController.updateProductById);

// Delete a product by id
router.delete('/product/:id', authMiddleware, productController.deleteProductById);

// Get all products
router.get('/products', productController.getAllProducts);

// Get all products associated with the current user
router.get('/products/user', authMiddleware, productController.getAllProductsByCurrentUser);

module.exports = router;

