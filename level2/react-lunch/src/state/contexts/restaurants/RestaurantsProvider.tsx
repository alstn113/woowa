import { useReducer, useMemo } from 'react';

import RestaurantsDispatchContext from './RestaurantsDispatchContext';
import RestaurantsStateContext from './RestaurantsStateContext';
import restaurantManager from '../../../lib/restaurantManager';
import restaurantsReducer from '../../reducers/retaurantsReducer';
import { RestaurantsState } from '../../types/restaurants.types';

interface RestaurantsProviderProps {
  children: React.ReactNode;
}

const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const initialState: RestaurantsState = useMemo(() => {
    return {
      restaurants: restaurantManager.getRestaurants(),
    };
  }, []);

  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <RestaurantsStateContext.Provider value={memoizedState}>
      <RestaurantsDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </RestaurantsDispatchContext.Provider>
    </RestaurantsStateContext.Provider>
  );
};

export default RestaurantsProvider;
