import { createSlice } from '@reduxjs/toolkit'; // creates a slice of state (a reducer)

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  /**
   * Redux toolkit supports the ability to directly manipulate state (unlike past redux)
   * hence the ability to increment, decrement, etc. (change) the state - Immer.js allows this
   *
   * Also, for every reducer created, createSlice automatically creates an equivalent action creator (function to dispatch)
   * so we can use such action anywhere in the app to dispatch to the state and update it
   */
  reducers: {
    // Increment
    increment: (state) => {
      state.value++;
    },
    // Increment by some value
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
    // Decrement
    decrement: (state) => {
      state.value--;
    },
    // Reset
    reset: (state) => {
      return initialState;
    },
  },
  // Handle async actions [thunks] here (reducer : {} handles non-thunk based actions)
  // Note = This can be redacted for RTKQuery which is the recomended approach
  // extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByValue, reset } =
  CounterSlice.actions; // always export our reducers (which in this case, are actions)
export default CounterSlice.reducer; // export the reducer (this whole slice) to hook into the configureStore() to create redux state with this reducer (slice)
// see store.js in /app where this reducer is imported
