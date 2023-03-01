import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import { DogApiSlice } from '../features/dogs/DogApiSlice';

// runs combine reducers to create state.counter, etc
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [DogApiSlice.reducerPath]: DogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(DogApiSlice.middleware);
  },
});

// Will hole the current state at any point in time
export const RootState = store.getState();

// This store is to be imported in main.js
