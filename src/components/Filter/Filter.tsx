import React from 'react';
import { useDispatch } from 'react-redux';

import { Game } from '../GameCard';

import { setPlatform } from '@/store/filterSlice';

export const Filter = ({ games }: { games: Game[] | undefined }) => {
  const dispatch = useDispatch();

  const platforms = Array.from(
    new Set(games?.flatMap((game) => game.platform.split(',')) || []),
  );

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPlatform(e.target.value));
  };

  return (
    <div className="filter">
      <span>Filter by Platform: </span>
      <select onChange={handlePlatformChange}>
        <option value="">All Platforms</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};
