import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './HomePage.module.scss';

import { useGetGamesQuery } from '@/api/gamesAPI';
import { Filter, GameListContainer, SearchBar } from '@/components';
import { useGamesFilter } from '@/hooks';
import { setResults } from '@/store/searchSlice';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { data: games, isLoading, isError } = useGetGamesQuery();
  const displayedGames = useGamesFilter(games);

  const handleSearch = (query: string) => {
    if (!games) return;

    const filteredGames = games.filter((game) => {
      return game.gameName.toLowerCase().includes(query.toLowerCase());
    });

    dispatch(setResults(filteredGames));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading games</div>;

  return (
    <div className={styles['home-page']}>
      <SearchBar onSearch={handleSearch} />
      <Filter games={games} />
      <GameListContainer games={displayedGames} />
    </div>
  );
};
