const express = require("express");
const con = require("./db");

const router = express.Router();

// Remove unnecessary router.use() call
// router.use();

// Get all products
router.get('/', async (req, res) => {
  try {
    const [rows] = await con.promise().query('SELECT * FROM products');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'An error occurred while fetching data' });
  }
});

router.get('/find/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await con.promise().query('SELECT * FROM products WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'An error occurred while fetching data' });
  }
});

module.exports = router;
