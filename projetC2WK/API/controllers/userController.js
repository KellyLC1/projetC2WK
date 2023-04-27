const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register user
exports.register = async (req, res, next) => {
  try {
    const { username, password, email, address } = req.body;
    const user = await User.create({ username, password, email, address });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    next(err);
  }
};

// Login user
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const isValid = await user.isValidPassword(password);
    if (!isValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Authentication successful', token });
  } catch (err) {
    next(err);
  }
};

// Get current user
exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

// Update user
exports.updateUser = async (req, res, next) => {
  try {
  const { username, password, email, address } = req.body;
  const user = await User.findById(req.user.userId);
  if (!user) {
  return res.status(404).json({ message: 'User not found' });
  }
  user.username = username || user.username;
  user.password = password ? await bcrypt.hash(password, 10) : user.password;
  user.email = email || user.email;
  user.address = address || user.address;
  const updatedUser = await user.save();
  res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
  next(err);
  }
  };
  
  // Delete user
  exports.deleteUser = async (req, res, next) => {
  try {
  const user = await User.findById(req.user.userId);
  if (!user) {
  return res.status(404).json({ message: 'User not found' });
  }
  await user.remove();
  res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
  next(err);
  }
  };
  
  // Get user by id
  exports.getUserById = async (req, res, next) => {
  try {
  const user = await User.findById(req.params.userId);
  if (!user) {
  return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ user });
  } catch (err) {
  next(err);
  }
  };
