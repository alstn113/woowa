import Component from '../core/Component';
import { FilterCategory, SortedBy } from '../types';
import { $ } from '../utils/dom';
import Selector from './common/Selector';
import restaurantStore from '../lib/RestaurantStore';

class RestaurantFilter extends Component {
  template() {
    return ``;
  }

  mounted() {
    new Selector($('.restaurant-filter-container'), {
      info: {
        name: 'category',
        id: 'category-filter',
        className: 'restaurant-filter',
        options: [
          { value: '전체', name: '전체' },
          { value: '한식', name: '한식' },
          { value: '중식', name: '중식' },
          { value: '일식', name: '일식' },
          { value: '양식', name: '양식' },
          { value: '아시안', name: '아시안' },
          { value: '기타', name: '기타' },
        ],
      },
      onChange: this.filterCategory.bind(this),
    });
    new Selector($('.restaurant-filter-container'), {
      info: {
        name: 'sorting',
        id: 'sorting-filter',
        className: 'restaurant-filter',
        options: [
          { value: 'name', name: '이름순' },
          { value: 'distance', name: '거리순' },
        ],
      },
      onChange: this.sortRestaurants.bind(this),
    });
  }

  filterCategory(event: Event) {
    const category = (event.target as HTMLSelectElement)
      .value as FilterCategory;
    restaurantStore.filterRestaurantsByCategory(category);
  }

  sortRestaurants(event: Event) {
    const sortBy = (event.target as HTMLSelectElement).value as SortedBy;
    restaurantStore.sortRestaurantsBy(sortBy);
  }
}

export default RestaurantFilter;
