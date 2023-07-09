import {
  Category,
  CreateRestaurant,
  FilterCategory,
  Restaurant,
  SortedBy,
} from '../types';
import { getFromLocalStorage } from '../utils/localStorage';
import mockRestaurants from '../data/mockData.json';

class RestaurantManager {
  private restaurants: Restaurant[];
  private filteredCategory: FilterCategory = '전체';
  private sortedBy: SortedBy = 'name';
  private id = 0;

  constructor() {
    this.restaurants = [];
    this.loadFromLocalStorage();
    this.setStartId();
    this.loadMockRestaurants();
  }

  getRestaurants(): Restaurant[] {
    const restaurants = this.restaurants.filter(
      (restaurant) =>
        restaurant.category === this.filteredCategory ||
        this.filteredCategory === '전체',
    );

    switch (this.sortedBy) {
      case 'distance':
        return restaurants.sort((a, b) => a.distance - b.distance);
      case 'name':
        return restaurants.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return restaurants;
    }
  }

  filterByCategory(category: Category) {
    this.filteredCategory = category;
  }

  sortBy(sortedBy: SortedBy) {
    this.sortedBy = sortedBy;
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push({
      ...restaurant,
    });
  }

  private loadFromLocalStorage() {
    const restaurants = getFromLocalStorage<Restaurant[]>('restaurants') ?? [];
    restaurants.forEach((restaurant) => this.addRestaurant(restaurant));
  }

  private loadMockRestaurants() {
    const { restaurants } = mockRestaurants as {
      restaurants: CreateRestaurant[];
    };

    restaurants.forEach((restaurant) =>
      this.addRestaurant({
        ...restaurant,
        id: this.id++,
      }),
    );
  }

  private setStartId() {
    const maxId = Math.max(
      ...this.restaurants.map((restaurant) => restaurant.id),
    );
    this.id = maxId + 1;
  }
}

export default RestaurantManager;
