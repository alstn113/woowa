import { Category, Restaurant } from '../types';

class RestaurantManager {
  private restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }

  addRestaurant(restaurant: Restaurant): void {
    this.restaurants.push(restaurant);
  }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  filteredByCategory(category: Category): Restaurant[] {
    return this.restaurants.filter(
      (restaurant) => restaurant.category === category,
    );
  }

  sortByDistance(): Restaurant[] {
    return [...this.restaurants].sort((a, b) => a.distance - b.distance);
  }

  sortByName(): Restaurant[] {
    return [...this.restaurants].sort((a, b) => a.name.localeCompare(b.name));
  }
}

export default RestaurantManager;
