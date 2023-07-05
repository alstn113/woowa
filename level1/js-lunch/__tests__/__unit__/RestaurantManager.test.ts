import { CreateRestaurant } from '../../src/types';
import RestaurantManager from '../../src/domains/RestaurantManager';

const restaurant1: CreateRestaurant = {
  category: '한식',
  name: '다라나',
  distance: 15,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

const restaurant2: CreateRestaurant = {
  category: '한식',
  name: '나다가',
  distance: 10,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

const restaurant3: CreateRestaurant = {
  category: '한식',
  name: '가나다',
  distance: 5,
  description: '김밥이 맛있는 집',
  link: 'https://www.naver.com',
};

describe('RestaurantManager 클래스', () => {
  it('addRestaurant 메소드는 레스토랑을 추가할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
      { id: 0, favorite: false, ...restaurant1 },
    ]);
  });

  it('filterByCategory 메소드는 카테고리를 기준으로 레스토랑을 필터링할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.filterByCategory('한식');

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
      { id: 0, favorite: false, ...restaurant1 },
    ]);

    restaurantManager.filterByCategory('중식');

    expect(restaurantManager.getRestaurants()).toEqual([]);
  });

  it('sortRestaurants 메소드는 레스토랑을 정렬할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.sortRestaurantsBy('distance');

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
      { id: 0, favorite: false, ...restaurant1 },
    ]);

    restaurantManager.sortRestaurantsBy('name');

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
      { id: 0, favorite: false, ...restaurant1 },
    ]);
  });

  it('toggleFavorite 메소드는 레스토랑의 즐겨찾기 상태를 변경할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.toggleFavorite(0);

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
      {
        id: 0,
        favorite: true,
        ...restaurant1,
      },
    ]);
  });

  it('removeRestaurant 메소드는 레스토랑을 삭제할 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.removeRestaurant(0);

    expect(restaurantManager.getRestaurants()).toEqual([
      { id: 2, favorite: false, ...restaurant3 },
      { id: 1, favorite: false, ...restaurant2 },
    ]);
  });

  it('getFavoriteRestaurants 메소드는 즐겨찾기한 레스토랑을 가져올 수 있다.', () => {
    const restaurantManager = new RestaurantManager();
    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);
    restaurantManager.addRestaurant(restaurant3);

    restaurantManager.toggleFavorite(0);

    expect(restaurantManager.getFavoriteRestaurants()).toEqual([
      { id: 0, favorite: true, ...restaurant1 },
    ]);
  });
});
