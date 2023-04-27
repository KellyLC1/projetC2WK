const mysql = require('mysql');
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
});

connection.connect();

const userSchema = `
CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  email VARCHAR(255),
  address VARCHAR(255)
)`;

connection.query(userSchema, function (error, results, fields) {
  if (error) throw error;
  console.log('User table created successfully');
});

// Hash password before saving to database
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

// Method to compare password
const isValidPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  connection,
  hashPassword,
  isValidPassword
};
