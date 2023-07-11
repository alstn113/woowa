import { useContext } from 'react';

import RestaurantsDispatchContext from '../../state/contexts/restaurants/RestaurantsDispatchContext';

const useRestaurantsActions = () => {
  const value = useContext(RestaurantsDispatchContext);
  if (!value)
    throw new Error(
      'useRestaurantsActions must be used within a RestaurantsProvider',
    );
  return value;
};

export default useRestaurantsActions;
