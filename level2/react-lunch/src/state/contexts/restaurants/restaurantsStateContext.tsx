import { createContext } from 'react';

import { RestaurantsState } from '../../types/restaurants.types';

const RestaurantsStateContext = createContext<RestaurantsState | undefined>(
  undefined,
);

export default RestaurantsStateContext;
