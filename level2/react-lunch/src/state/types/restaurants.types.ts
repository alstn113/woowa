import { Restaurant, Category, SortedBy } from '../../types';
import { FILTER_BY_CATEGORY, SORT_BY } from '../actions/restaurantsActions';

export interface RestaurantsState {
  restaurants: Restaurant[];
}

export type RestaurantsAction =
  | { type: typeof FILTER_BY_CATEGORY; payload: Category }
  | { type: typeof SORT_BY; payload: SortedBy };
