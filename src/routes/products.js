const express = require('express');

const router = express.Router();

const productsController = require('../controller/products');

// CREATE -> POST
router.post('/products', productsController.createProduct);

// READ -> GET
router.get('/products', productsController.getAllProducts);


module.exports = router;