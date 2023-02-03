const express = require('express');
const router = express.Router();
const { getCoffee, setCoffee, updateCoffee, deleteCoffee } = require('../controllers/coffeeController');

const { protect } = require("../middleware/authMiddleware");

router.get('/', protect, getCoffee);

router.post('/', protect, setCoffee);

router.put('/:id', protect, updateCoffee);

router.delete('/:id', protect, deleteCoffee);

module.exports = router; 