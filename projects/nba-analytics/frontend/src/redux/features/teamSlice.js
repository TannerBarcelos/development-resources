import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/axiosInstance';

// Initial State
const initialState = {
  teams: {},
  currentSeason: '',
};

// Async Thunks
export const fetchTeams = createAsyncThunk(
  'teams/fetchAllTeams',
  async (thunkAPI) => {
    const teamData = await instance.get('/all'); // axios returns data object for json
    return teamData.data;
  },
);

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.teams = action.payload.statistics;
      state.currentSeason = action.payload.currentSeason;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = teamSlice.actions;

export default teamSlice.reducer;
