import { useContext } from 'react';

import RestaurantsStateContext from '../../state/contexts/restaurants/RestaurantsStateContext';

const useRestaurantsStates = () => {
  const value = useContext(RestaurantsStateContext);
  if (value === undefined)
    throw new Error(
      'useRestaurantsStates must be used within a RestaurantsProvider',
    );
  return value;
};
export default useRestaurantsStates;
