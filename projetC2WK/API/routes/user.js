const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Créer un utilisateur
router.post('/register', UserController.createUser);

// Se connecter
router.post('/login', UserController.loginUser);

// Récupérer les infos de l'utilisateur connecté
router.get('/me', auth, UserController.getCurrentUser);

// Récupérer tous les utilisateurs (accessible uniquement par un admin)
router.get('/users', auth, admin, UserController.getAllUsers);

// Modifier un utilisateur
router.put('/user/:id', auth, UserController.updateUser);

// Récupérer les infos d'un utilisateur
router.get('/user/:id', auth, UserController.getUser);

// Supprimer un utilisateur
router.delete('/user/:id', auth, UserController.deleteUser);

module.exports = router;
