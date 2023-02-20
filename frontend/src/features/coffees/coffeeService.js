import axios from 'axios';

const API_URL = '/api/coffees/';

// Create new coffee
const createCoffee = async (coffeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, coffeeData, config);

  return response.data;
}

// Get user coffees 
const getCoffees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config);

  return response.data;
}

/// Delete user coffee
const deleteCoffee = async (coffeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL + coffeeId, config);

  return response.data;
}

const goalService = {
  createCoffee,
  getCoffees,
  deleteCoffee,

}

export default goalService;