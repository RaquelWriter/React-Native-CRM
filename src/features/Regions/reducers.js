import { createSlice } from '@reduxjs/toolkit';

// The slice has 4 elements:
// createSlice({name, initialState, reducers})
const regionsSlice = createSlice({
  name: 'regions',
  initialState: {
    regions: [],
    loading: false,
  },
  reducers: {
    loadRegions: (state) => {
      state.loading = true;
    },
    loadResult: (state, action) => {
      state.regions = action.payload;
      state.loading = false;
    },
  },
});

export const { loadRegions, loadResult } = regionsSlice.actions;

export default regionsSlice.reducer;
