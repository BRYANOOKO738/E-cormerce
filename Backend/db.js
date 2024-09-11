const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'ookostores'
});

con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected successfully');
  }
});

module.exports = con;


