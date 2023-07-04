import Component from '../core/Component';
import RestaurantManager from '../domains/RestaurantManager';
import { FilterCategory, Restaurant, SortedBy } from '../types';
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

  private saveDataToLocalStorage(restaurant: Restaurant): void {
    const restaurants = this.restaurantManager.getRestaurants();
    setToLocalStorage('restaurants', [...restaurants, restaurant]);
  }

  private loadDataFromLocalStorage(): void {
    const restaurants = getFromLocalStorage('restaurants') ?? [];
    restaurants.forEach((restaurant: Restaurant) => {
      this.restaurantManager.addRestaurant(restaurant);
    });
  }

  private setStartId() {
    const restaurants = this.restaurantManager.getRestaurants();
    const maxId = Math.max(...restaurants.map((restaurant) => restaurant.id));
    this.restaurantManager.setStartId(maxId + 1);
  }

  getRestaurants(): Restaurant[] {
    return this.restaurantManager.getRestaurants();
  }

  addRestaurant(restaurant: Restaurant): void {
    this.restaurantManager.addRestaurant(restaurant);
    this.saveDataToLocalStorage(restaurant);
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
}

const restaurantStore = RestaurantStore.getInstance();
export default restaurantStore;
