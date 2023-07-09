import { createContext } from 'react';

import { Category, Restaurant, SortedBy } from '../types';

interface RestaurantContextProps {
  restaurants: Restaurant[];
  filterByCategory: (category: Category) => void;
  sortBy: (sortBy: SortedBy) => void;
}

const RestaurantContext = createContext<RestaurantContextProps | null>(null);

export default RestaurantContext;
