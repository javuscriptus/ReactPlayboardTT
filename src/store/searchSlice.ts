import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game } from '@/components/GameCard';

interface SearchState {
  results: Game[];
}

const initialState: SearchState = {
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<Game[]>) => {
      state.results = action.payload;
    },
  },
});

export const { setResults } = searchSlice.actions;
export default searchSlice;
