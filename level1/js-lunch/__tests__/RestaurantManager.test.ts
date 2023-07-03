import { Restaurant } from '../src/types';
import RestaurantManager from '../src/domains/RestaurantManager';

describe('RestaurantManager 클래스', () => {
  let restaurantManager: RestaurantManager;

  beforeEach(() => {
    restaurantManager = new RestaurantManager();
  });

  it('getRestaurants 메서드는 레스토랑 목록을 반환한다.', () => {
    const restaurant: Restaurant = {
      name: '마법사주방',
      category: '기타',
      distance: 5,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    restaurantManager.addRestaurant(restaurant);

    expect(restaurantManager.getRestaurants()).toEqual([restaurant]);
  });

  it('addRestaurant 메서드는 레스토랑을 추가한다.', () => {
    const restaurant: Restaurant = {
      name: '마법사주방',
      category: '기타',
      distance: 5,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    restaurantManager.addRestaurant(restaurant);

    expect(restaurantManager.getRestaurants()).toEqual([restaurant]);
  });

  it('filteredByCategory 메서드는 카테고리에 해당하는 레스토랑을 반환한다.', () => {
    const restaurant1: Restaurant = {
      name: '마법사주방',
      category: '기타',
      distance: 5,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    const restaurant2: Restaurant = {
      name: '마법사주방2',
      category: '양식',
      distance: 5,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);

    expect(restaurantManager.filteredByCategory('기타')).toEqual([restaurant1]);
  });

  it('sortByDistance 메서드는 거리순으로 정렬된 레스토랑을 반환한다.', () => {
    const restaurant1: Restaurant = {
      name: '마법사주방',
      category: '기타',
      distance: 20,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    const restaurant2: Restaurant = {
      name: '마법사주방2',
      category: '양식',
      distance: 15,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);

    expect(restaurantManager.sortByDistance()).toEqual([
      restaurant2,
      restaurant1,
    ]);
  });

  it('sortByName 메서드는 이름순으로 정렬된 레스토랑을 반환한다.', () => {
    const restaurant1: Restaurant = {
      name: '나다라',
      category: '기타',
      distance: 20,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    const restaurant2: Restaurant = {
      name: '가나다',
      category: '양식',
      distance: 15,
      link: 'https://place.map.kakao.com/20873649',
      description: '마술사가 운영하는 주방',
    };

    restaurantManager.addRestaurant(restaurant1);
    restaurantManager.addRestaurant(restaurant2);

    expect(restaurantManager.sortByName()).toEqual([restaurant2, restaurant1]);
  });
});
