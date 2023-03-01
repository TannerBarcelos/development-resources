import { configureStore } from '@reduxjs/toolkit';

// Reducers
import teamsReducer from './features/teamSlice';

export const store = configureStore({
  reducer: {
    teamsReducer,
  },
});
