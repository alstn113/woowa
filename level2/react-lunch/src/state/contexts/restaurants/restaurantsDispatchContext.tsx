import { Dispatch, createContext } from 'react';

import { RestaurantsAction } from '../../types/restaurants.types';

const RestaurantsDispatchContext = createContext<
  Dispatch<RestaurantsAction> | undefined
>(undefined);

export default RestaurantsDispatchContext;
