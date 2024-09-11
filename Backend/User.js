const express = require("express");
const con = require("./db");
const router = express.Router();
const bcrypt = require("bcrypt");


router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const checkEmailSql = 'SELECT * FROM users WHERE email = ?';
  con.query(checkEmailSql, [email], async (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'User already registered' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      con.query(insertSql, [username, email, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).json({ error: 'Server error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
});

module.exports = router;




router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  con.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    try {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error comparing passwords:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
});

module.exports = router;


module.exports = router;
