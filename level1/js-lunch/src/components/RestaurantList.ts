import Component from '../core/Component';
import { $ } from '../utils/dom';
import RestaurantItem from './RestaurantItem';
import restaurantStore from '../lib/RestaurantStore';

class RestaurantList extends Component {
  setup() {
    restaurantStore.subscribe(this);
  }
  template() {
    return `
      <ul class="restaurant-list"></ul>
    `;
  }

  mounted() {
    restaurantStore.getRestaurants().forEach((restaurant) => {
      new RestaurantItem($('.restaurant-list'), {
        restaurant,
      });
    });
  }
}

export default RestaurantList;
