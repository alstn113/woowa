import Component from '../core/Component';
import RestaurantManager from '../domains/RestaurantManager';
import {
  CreateRestaurant,
  FilterCategory,
  Restaurant,
  SortedBy,
} from '../types';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';

class RestaurantStore {
  private static instance: RestaurantStore;
  private restaurantManager: RestaurantManager;
  private observers: Component[] = [];

  private constructor() {
    this.restaurantManager = new RestaurantManager();
    this.loadDataFromLocalStorage();
    this.setStartId();
  }

  static getInstance(): RestaurantStore {
    if (!RestaurantStore.instance) {
      RestaurantStore.instance = new RestaurantStore();
    }
    return RestaurantStore.instance;
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.render());
  }

  subscribe(observer: Component): void {
    this.observers.push(observer);
  }

  private saveDataToLocalStorage(): void {
    const restaurants = this.restaurantManager.getRestaurants();
    setToLocalStorage('restaurants', restaurants);
  }

  private loadDataFromLocalStorage(): void {
    const restaurants = getFromLocalStorage('restaurants') ?? [];
    restaurants.forEach((restaurant: Restaurant) => {
      this.restaurantManager.addRestaurant(restaurant);
    });
  }

  /**
   * @description localStorage에 있는 id의 최댓값을 가져와서 시작점으로 설정한다.
   */
  private setStartId() {
    const restaurants = this.restaurantManager.getRestaurants();
    const maxId = Math.max(...restaurants.map((restaurant) => restaurant.id));
    this.restaurantManager.setStartId(maxId + 1);
  }

  getRestaurants(): Restaurant[] {
    return this.restaurantManager.getRestaurants();
  }

  getRestaurant(id: number): Restaurant {
    const restaurant = this.restaurantManager
      .getRestaurants()
      .find((restaurant) => restaurant.id === id);
    if (!restaurant) throw new Error('존재하지 않는 레스토랑입니다.');
    return restaurant;
  }

  addRestaurant(restaurant: CreateRestaurant): void {
    this.restaurantManager.addRestaurant(restaurant);
    this.saveDataToLocalStorage();
    this.notify();
  }

  sortRestaurantsBy(sortBy: SortedBy) {
    this.restaurantManager.sortRestaurantsBy(sortBy);
    this.notify();
  }

  filterRestaurantsByCategory(category: FilterCategory) {
    this.restaurantManager.filterByCategory(category);
    this.notify();
  }

  toggleFavorite(id: number) {
    this.restaurantManager.toggleFavorite(id);
    this.saveDataToLocalStorage();
    this.notify();
  }

  removeRestaurant(id: number) {
    this.restaurantManager.removeRestaurant(id);
    this.saveDataToLocalStorage();
    this.notify();
  }

  getFavoriteRestaurants(): Restaurant[] {
    return this.restaurantManager.getFavoriteRestaurants();
  }
}

const restaurantStore = RestaurantStore.getInstance();
export default restaurantStore;
