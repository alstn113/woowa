import restaurantManager from '../../lib/restaurantManager';
import {
  RestaurantsAction,
  RestaurantsState,
} from '../types/restaurants.types';

const restaurantsReducer = (
  state: RestaurantsState,
  action: RestaurantsAction,
): RestaurantsState => {
  switch (action.type) {
    case 'FILTER_BY_CATEGORY': {
      restaurantManager.filterByCategory(action.payload);
      return {
        ...state,
        restaurants: restaurantManager.getRestaurants(),
      };
    }
    case 'SORT_BY': {
      restaurantManager.sortBy(action.payload);
      return {
        ...state,
        restaurants: restaurantManager.getRestaurants(),
      };
    }
    default:
      return state;
  }
};

export default restaurantsReducer;
