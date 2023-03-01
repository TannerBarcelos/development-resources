import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'All', // All, Completed, Pending
  flags: [], // 'Green', 'Purple', 'Red' or no flags (default)
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusUpdated: (state, action) => {
      const { status } = action.payload;
      state.status = status;
    },
    flagsUpdated: (state, action) => {
      const { flags } = action.payload;
      state.flags = flags; // the selected flags from the UI - 'Green', 'Purple', 'Red' or no flags [comes in as an array of the selected flags in the UI]
    },
  },
});

export const filters = (state) => state.getState();

export const { statusUpdated, flagsUpdated } = filterSlice.actions;

export default filterSlice.reducer;
