import { CATEGORY_ICON_PATH, FAVORITE_ICON_PATH } from '../constants';
import Component from '../core/Component';
import restaurantStore from '../lib/RestaurantStore';
import { Restaurant } from '../types';
import { $ } from '../utils/dom';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

class RestaurantItem extends Component<RestaurantItemProps> {
  template() {
    const { id, name, category, description, distance, favorite } =
      this.props.restaurant;

    const FavoriteIcon = favorite
      ? FAVORITE_ICON_PATH['filled']
      : FAVORITE_ICON_PATH['lined'];

    return `
    <li id="${id}" class="restaurant">
      <div class="restaurant__category">
        <img
          src="${CATEGORY_ICON_PATH[category]}"
          alt="한식" 
          class="category-icon"
        />
      </div>
      <div class="restaurant__info">
        <div>
          <h3 class="restaurant__name text-subtitle">${name}</h3>
          <button class="restaurant__favorite-button">
            <img src="${FavoriteIcon}" alt="즐겨찾기" />
          </button> 
        </div>
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

  setEvent(): void {
    this.addEvent('click', '.restaurant__favorite-button', (e) => {
      const restaurantId = (e.target as HTMLElement).closest('.restaurant')?.id;
      restaurantStore.toggleFavorite(Number(restaurantId));
    });

    this.addEvent('click', '.restaurant', (e) => {
      const restaurantId = (e.target as HTMLElement).closest('.restaurant')?.id;
      $('#restaurant-detail-modal').classList.add('modal--open');
    });
  }
}

export default RestaurantItem;
