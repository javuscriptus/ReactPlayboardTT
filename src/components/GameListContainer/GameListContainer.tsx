import { useSelector } from 'react-redux';

import { Game, GameCard } from '../GameCard';

import styles from './GameListContainer.module.scss';

import { useLazyLoading } from '@/hooks';
import { RootState } from '@/store';
import { ITEMS_PER_PAGE } from '@/utils/consts';

export const GameListContainer = ({ games }: { games: Game[] | undefined }) => {
  const searchResults = useSelector((state: RootState) => state.search.results);
  const allGames = searchResults.length > 0 ? searchResults : games || [];

  const { displayedItems, loadMore } = useLazyLoading(allGames, ITEMS_PER_PAGE);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      loadMore();
    }
  };

  return (
    <div className={styles['game-list']} onScroll={handleScroll}>
      {displayedItems.map((game) => (
        <GameCard key={game.gameID} game={game} />
      ))}
    </div>
  );
};
