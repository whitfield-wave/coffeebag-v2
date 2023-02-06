import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coffeeService from './coffeeService';

const initialState = {
  coffees: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new coffee
export const createCoffee = createAsyncThunk('coffees/create', async (coffeeData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await coffeeService.createCoffee(coffeeData, token);
  } catch (error) {
    const message = (error.response
      && error.response.data
      && error.response.data.message)
      || error.message
      || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

// Get user goals
export const getCoffees = createAsyncThunk('coffees/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await coffeeService.getCoffees(token);
  } catch (error) {
    const message = (error.response
      && error.response.data
      && error.response.data.message)
      || error.message
      || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCoffee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoffee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coffees.push(action.payload);
      })
      .addCase(createCoffee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCoffees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoffees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coffees = action.payload;
      })
      .addCase(getCoffees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})

export const { reset } = coffeeSlice.actions;
export default coffeeSlice.reducer;