import Component from '../core/Component';
import { Category, SortedBy } from '../types';
import Selector from './Selector';

const categoryData = {
  name: 'category',
  id: 'category',
  options: [
    { value: '전체', name: '전체' },
    { value: '한식', name: '한식' },
    { value: '중식', name: '중식' },
    { value: '일식', name: '일식' },
    { value: '양식', name: '양식' },
    { value: '아시안', name: '아시안' },
    { value: '기타', name: '기타' },
  ],
};

const sortData = {
  name: 'sorting',
  id: 'sorting',
  options: [
    { value: 'name', name: '이름순' },
    { value: 'distance', name: '거리순' },
  ],
};

class RestaurantFilter extends Component {
  template() {
    return `
    <section class="restaurant-filter-container">
      ${new Selector(this.$target, {
        data: categoryData,
        onChange: this.filterCategory.bind(this),
      }).template()}
      ${new Selector(this.$target, {
        data: sortData,
        onChange: this.sortRestaurants.bind(this),
      }).template()}
    </section>
  `;
  }

  mounted() {}

  filterCategory(event: Event) {
    const category = (event.target as HTMLSelectElement).value as Category;
    // this.store.filterCategory(category);
  }

  sortRestaurants(event: Event) {
    const sortBy = (event.target as HTMLSelectElement).value as SortedBy;
    // this.store.sortRestaurants(sortBy);
  }
}

export default RestaurantFilter;
