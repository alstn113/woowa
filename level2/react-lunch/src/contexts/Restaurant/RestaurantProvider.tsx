import { useState } from 'react';

import RestaurantContext from './RestaurantContext';
import restaurantManager from '../../lib/restaurantManager';
import { Category, Restaurant, SortedBy } from '../../types';

interface RestaurantProviderProps {
  children: React.ReactNode;
}

const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  if (!RestaurantContext) throw new Error('RestaurantContext is not defined');

  const [restaurants, setRestaurants] = useState<Restaurant[]>(
    restaurantManager.getRestaurants(),
  );
  const sortBy = (sortBy: SortedBy) => {
    restaurantManager.sortBy(sortBy);
    setRestaurants(restaurantManager.getRestaurants());
  };

  const filterByCategory = (category: Category) => {
    restaurantManager.filterByCategory(category);
    setRestaurants(restaurantManager.getRestaurants());
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        filterByCategory,
        sortBy,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
