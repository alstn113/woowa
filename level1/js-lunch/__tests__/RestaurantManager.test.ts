import { Restaurant } from '../src/types';
import RestaurantManager from '../src/domains/RestaurantManager';

const restaurant1: Restaurant = {
  category: '한식',
  name: '다라나',
  distance: 15,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

const restaurant2: Restaurant = {
  category: '한식',
  name: '나다가',
  distance: 10,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

const restaurant3: Restaurant = {
  category: '한식',
  name: '가나다',
  distance: 5,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

describe('RestaurantManager', () => {
  it('addRestaurant 메소드는 레스토랑을 추가할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    expect(restaurantManager.getRestaurants()).toEqual([
      restaurant1,
      restaurant2,
      restaurant3,
    ]);
  });

  it('filterByCategory 메소드는 카테고리를 기준으로 레스토랑을 필터링할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.filterByCategory('한식');

    expect(restaurantManager.getRestaurants()).toEqual([
      restaurant1,
      restaurant2,
      restaurant3,
    ]);

    restaurantManager.filterByCategory('중식');

    expect(restaurantManager.getRestaurants()).toEqual([]);
  });

  it('sortRestaurants 메소드는 레스토랑을 정렬할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.sortRestaurants('distance');

    expect(restaurantManager.getRestaurants()).toEqual([
      restaurant3,
      restaurant2,
      restaurant1,
    ]);

    restaurantManager.sortRestaurants('name');

    expect(restaurantManager.getRestaurants()).toEqual([
      restaurant3,
      restaurant2,
      restaurant1,
    ]);
  });
});
