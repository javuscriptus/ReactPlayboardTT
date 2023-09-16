import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  platform: string | null;
}

const initialState: FilterState = {
  platform: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
  },
});

export const { setPlatform } = filterSlice.actions;

export default filterSlice;
