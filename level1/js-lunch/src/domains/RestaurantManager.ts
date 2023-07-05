import {
  CreateRestaurant,
  FilterCategory,
  Restaurant,
  SortedBy,
} from '../types';

class RestaurantManager {
  private restaurants: Restaurant[];
  private filteredCategory: FilterCategory = '전체';
  private sortedBy: SortedBy = 'name';
  private id = 0;

  constructor() {
    this.restaurants = [];
  }

  addRestaurant(restaurant: CreateRestaurant): void {
    this.restaurants.push({ id: this.id++, favorite: false, ...restaurant });
  }

  getRealRestaurants(): Restaurant[] {
    return this.restaurants;
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

  filterByCategory(category: FilterCategory): void {
    this.filteredCategory = category;
  }

  sortRestaurantsBy(sortedBy: SortedBy): void {
    this.sortedBy = sortedBy;
  }

  toggleFavorite(id: number): void {
    const restaurant = this.restaurants.find(
      (restaurant) => restaurant.id === id,
    );

    if (!restaurant) throw new Error('레스토랑을 찾을 수 없습니다.');

    restaurant.favorite = !restaurant.favorite;
  }

  removeRestaurant(id: number): void {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }

  getFavoriteRestaurants(): Restaurant[] {
    return this.restaurants.filter((restaurant) => restaurant.favorite);
  }

  /**
   * @description localStorage에 있는 id의 최댓값을 가져와서 시작점으로 설정한다.
   */
  setStartId(id: number): void {
    this.id = id;
  }
}

export default RestaurantManager;
