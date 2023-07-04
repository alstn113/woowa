import { FilterCategory, Restaurant, SortedBy } from '../types';

class RestaurantManager {
  private restaurants: Restaurant[];
  private filteredCategory: FilterCategory = '전체';
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

  filterByCategory(category: FilterCategory): Restaurant[] {
    this.filteredCategory = category;
    return this.getRestaurants();
  }

  sortRestaurantsBy(sortedBy: SortedBy): Restaurant[] {
    this.sortedBy = sortedBy;
    return this.getRestaurants();
  }
}

export default RestaurantManager;
