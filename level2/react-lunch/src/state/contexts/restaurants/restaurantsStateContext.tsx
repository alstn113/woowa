import { createContext } from 'react';

import { RestaurantsState } from '../../types/restaurants.types';

const RestaurantsStateContext = createContext<RestaurantsState | null>(null);

export default RestaurantsStateContext;
