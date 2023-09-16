import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Game } from '@/components/GameCard';
import { BASE_URL } from '@/utils/consts';

interface ServerResponse {
  result: Game[];
}

export const gamesAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<Game[], void>({
      query: () => 'game_list',
      transformResponse: (response: ServerResponse) => response.result,
    }),
  }),
});

export const { useGetGamesQuery } = gamesAPI;
