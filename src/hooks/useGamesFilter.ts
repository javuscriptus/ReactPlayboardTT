import { useSelector } from 'react-redux';

import { RootState } from '../store';

import { Game } from '@/components/GameCard';

export const useGamesFilter = (games: Game[] | undefined) => {
  const platformFilter = useSelector((state: RootState) => state.filter.platform);

  if (!games) return [];
  if (!platformFilter) return games;

  return games.filter((game) => {
    return game.platform.includes(platformFilter);
  });
};
