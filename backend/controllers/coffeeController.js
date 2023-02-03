const asyncHandler = require('express-async-handler');

const getCoffee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Coffee' })
});

const setCoffee = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'Post Coffee' });
});

const updateCoffee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update coffee ${req.params.id}` });
})
const deleteCoffee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete coffee ${req.params.id}` });
})

module.exports = {
  getCoffee,
  setCoffee,
  updateCoffee,
  deleteCoffee
}