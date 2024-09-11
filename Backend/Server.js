const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const con = require('./db.js');

dotenv.config();
// const Auth = require('./Auth')


const Product = require('./Product.js');
const users = require('./User.js');

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

app.use(express.json());
app.use(cors());

// Add database connection to request object (if needed)
app.use((req, res, next) => {
  req.con = con;
  next();
});

// Define routes
app.use('/api/product', Product); // Ensure route files export a valid Express Router
app.use('/api/users', users); // Ensure route files export a valid Express Router
// app.use('/api/Auth', Auth)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
