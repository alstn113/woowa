import Component from '../core/Component';
import { $ } from '../utils/dom';
import RestaurantItem from './RestaurantItem';
import restaurantStore from '../lib/RestaurantStore';

interface RestaurantListProps {
  isAllorFavorite: 'all' | 'favorite';
}

class RestaurantList extends Component<RestaurantListProps> {
  setup() {
    restaurantStore.subscribe(this);
  }
  template() {
    return `
      <ul class="restaurant-list"></ul>
    `;
  }

  mounted() {
    const { isAllorFavorite } = this.props;

    if (isAllorFavorite === 'all') {
      restaurantStore.getRestaurants().forEach((restaurant) => {
        new RestaurantItem($('.restaurant-list'), {
          restaurant,
        });
      });
      return;
    }

    if (isAllorFavorite === 'favorite') {
      restaurantStore.getFavoriteRestaurants().forEach((restaurant) => {
        new RestaurantItem($('.restaurant-list'), {
          restaurant,
        });
      });
    }
  }
}

export default RestaurantList;
