// This takes in all route functions associated with the given http
// requests and maps them appropriately for better legibility.
// The functions are defined in the respective *Routes.js file.

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUserById,
  deleteSingleUserById,
  updateUserById,
  createNewUser,
} = require('../routes/user-routes');

router.post('/', createNewUser);
router.get('/', getAllUsers);
router.get('/:id', getSingleUserById);
router.delete('/:id', deleteSingleUserById);
router.put('/:id', updateUserById);

module.exports = router;