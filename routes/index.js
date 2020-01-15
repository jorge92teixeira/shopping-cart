const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const products = await Product.find();
  res.render('shop/index', { title: 'Shopping Cart', products });
});

module.exports = router;
