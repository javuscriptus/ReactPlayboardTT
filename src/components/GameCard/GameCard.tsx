import React from 'react';

import { getImageUrl } from '@/utils/helpers';

export type Game = {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  typeDescription: string;
  technology: string;
  platform: string;
  demoGameAvailable: boolean;
  aspectRatio: string;
  technologyID: string;
  gameIdNumeric: number;
  jurisdictions: string[];
};

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const imageUrl = getImageUrl(game.gameID);

  return (
    <div>
      <img src={imageUrl} alt={game.gameName} />
      <h2>{game.gameName}</h2>
    </div>
  );
};
