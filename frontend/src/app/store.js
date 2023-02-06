import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import coffeeReducer from '../features/coffees/coffeeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    coffees: coffeeReducer,
  },
});
