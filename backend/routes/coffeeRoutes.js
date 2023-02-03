const express = require('express');
const router = express.Router();
const { getCoffee, setCoffee, updateCoffee, deleteCoffee } = require('../controllers/coffeeController');

router.get('/', getCoffee);

router.post('/', setCoffee);

router.put('/:id', updateCoffee);

router.delete('/:id', deleteCoffee);

module.exports = router; 