var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
const mysql = require('mysql');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Adresse du serveur MySQL
  user: 'root', // Nom d'utilisateur MySQL
  database: 'e_shop' // Nom de la base de données MySQL
});

// Vérification de la connexion à la base de données MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Utilisation de la connexion MySQL dans les middlewares
app.use((req, res, next) => {
  req.mysql = connection;
  next();
});

// Importation et utilisation des routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
