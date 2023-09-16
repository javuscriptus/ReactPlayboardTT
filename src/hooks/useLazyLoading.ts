import { useEffect, useState } from 'react';

import { Game } from '@/components/GameCard';

export const useLazyLoading = (items: Game[], itemsPerPage: number) => {
  const [displayedItems, setDisplayedItems] = useState<Game[]>([]);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);

  useEffect(() => {
    setDisplayedItems(items.slice(0, itemsToShow));
  }, [items, itemsToShow]);

  const loadMore = () => {
    setItemsToShow((prev) => prev + itemsPerPage);
  };

  return { displayedItems, loadMore };
};
