// This takes in all route functions associated with the given http
// requests and maps them appropriately for better legibility.
// The functions are defined in the respective *Routes.js file.

const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getSingleProductById,
  deleteSingleProductById,
  createNewProduct,
  getUserProducts,
} = require('../routes/product-routes');

router.post('/', createNewProduct);
router.get('/mine/:page', getUserProducts);
router.get('/', getAllProducts);
router.get('/:id', getSingleProductById);
router.delete('/:id', deleteSingleProductById);

module.exports = router;