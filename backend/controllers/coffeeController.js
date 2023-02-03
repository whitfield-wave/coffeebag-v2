const asyncHandler = require('express-async-handler');
const { globalAgent } = require('http');

const Coffee = require('../models/coffeeModel');

const getCoffee = asyncHandler(async (req, res) => {
  const coffees = await Coffee.find();
  res.status(200).json(coffees);

});

const setCoffee = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.roaster) {
    res.status(400);
    throw new Error('Please add a name and roaster');
  }

  const coffee = await Coffee.create({
    name: req.body.name,
    roaster: req.body.roaster,
  })

  res.status(200).json(coffee);
});

const updateCoffee = asyncHandler(async (req, res) => {
  const coffee = await Coffee.findById(req.params.id);

  if (!coffee) {
    res.status(400);
    throw new Error('Coffee not found');
  }
  const updatedCoffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedCoffee);
})
const deleteCoffee = asyncHandler(async (req, res) => {
  const coffee = await Coffee.findById(req.params.id);
  if (!coffee) {
    res.status(400);
    throw new Error('Coffee not found');
  }

  await coffee.remove();

  res.status(200).json({ id: req.params.id });
})

module.exports = {
  getCoffee,
  setCoffee,
  updateCoffee,
  deleteCoffee
}