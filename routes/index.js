const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', async (req, res, next) => {
  const products = await Product.find();
  res.render('shop/index', { title: 'Shopping Cart', products });
});

router.get('/user/signup', (req, res, next) => {
  res.render('user/signup', { csrfToken: req.csrfToken() })
});

router.post('/user/signup', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
