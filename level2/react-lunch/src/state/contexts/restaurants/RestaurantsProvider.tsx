import { useReducer } from 'react';

import RestaurantsDispatchContext from './RestaurantsDispatchContext';
import RestaurantsStateContext from './RestaurantsStateContext';
import restaurantManager from '../../../lib/restaurantManager';
import restaurantsReducer from '../../reducers/retaurantsReducer';
import { RestaurantsState } from '../../types/restaurants.types';

interface RestaurantsProviderProps {
  children: React.ReactNode;
}

const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const initialState: RestaurantsState = {
    restaurants: restaurantManager.getRestaurants(),
  };

  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  return (
    <RestaurantsStateContext.Provider value={state}>
      <RestaurantsDispatchContext.Provider value={dispatch}>
        {children}
      </RestaurantsDispatchContext.Provider>
    </RestaurantsStateContext.Provider>
  );
};

export default RestaurantsProvider;
