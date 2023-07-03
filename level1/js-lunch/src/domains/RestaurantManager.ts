import { Category, Restaurant, SortedBy } from '../types';

class RestaurantManager {
  private restaurants: Restaurant[];
  private filteredCategory: Category = '전체';
  private sortedBy: SortedBy | null = null;

  constructor() {
    this.restaurants = [];
  }

  addRestaurant(restaurant: Restaurant): void {
    this.restaurants.push(restaurant);
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

  filterByCategory(category: Category): void {
    this.filteredCategory = category;
  }

  sortRestaurants(sortedBy: SortedBy): void {
    this.sortedBy = sortedBy;
  }
}

export default RestaurantManager;
