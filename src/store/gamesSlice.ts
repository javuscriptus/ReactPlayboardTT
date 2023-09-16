import { createSlice } from '@reduxjs/toolkit';

import { Game } from '@/components/GameCard';

interface GamesState {
  games: Game[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: GamesState = {
  games: [],
  status: 'idle',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
});

export default gamesSlice;
