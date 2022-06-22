const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
router.get('/products/random', ProductController.getRandom);
router.get('/products/:id', ProductController.getId);
router.post('/products', ProductController.postNew);
router.put('/products/:id', ProductController.putId);
router.delete('/products/:id', ProductController.delId);

module.exports = router;
