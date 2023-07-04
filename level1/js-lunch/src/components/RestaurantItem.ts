import { CATEGORY_ICON_PATH } from '../constants';
import Component from '../core/Component';
import { Restaurant } from '../types';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

class RestaurantItem extends Component<RestaurantItemProps> {
  template() {
    const { name, category, description, distance } = this.props.restaurant;
    return `
    <li class="restaurant">
      <div class="restaurant__category">
        <img
          src="${CATEGORY_ICON_PATH[category]}"
          alt="한식" 
          class="category-icon"
        />
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${name}</h3>
        <span class="restaurant__distance text-body"
          >캠퍼스부터 ${distance}분 내</span
        >
        <p class="restaurant__description text-body">
          ${description}
        </p>
      </div>
    </li>
    `;
  }

  render() {
    this.$target.innerHTML += this.template();
    this.mounted();
  }
}

export default RestaurantItem;
