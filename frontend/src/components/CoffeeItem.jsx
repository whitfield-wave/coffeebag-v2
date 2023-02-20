import React from 'react'

import { useDispatch } from 'react-redux';
import { deleteCoffee } from '../features/coffees/coffeeSlice';

function CoffeeItem({ coffee }) {
  const dispatch = useDispatch();

  return (
    <div className='coffee'>
      <div>
        {new Date(coffee.createdAt).toLocaleString('en-us')}
      </div>
      <h2>{coffee.name}</h2>
      <h2>{coffee.roaster}</h2>
      <button onClick={() => dispatch(deleteCoffee(coffee._id))} className='close'>X</button>
    </div>
  )
}

export default CoffeeItem