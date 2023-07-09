import { createContext } from 'react';

import { Category, Restaurant, SortedBy } from '../../types';

interface RestaurantContextProps {
  restaurants: Restaurant[];
  filterByCategory: (category: Category) => void;
  sortBy: (sortBy: SortedBy) => void;
}

const RestaurantContext = createContext<RestaurantContextProps>({
  restaurants: [],
  filterByCategory: () => {
    throw new Error('filterByCategory() not implemented');
  },
  sortBy: () => {
    throw new Error('sortBy() not implemented');
  },
});

export default RestaurantContext;
