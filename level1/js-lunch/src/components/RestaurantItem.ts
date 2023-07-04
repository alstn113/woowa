import { CATEGORY_ICON_PATH, FAVORITE_ICON_PATH } from '../constants';
import Component from '../core/Component';
import restaurantStore from '../lib/RestaurantStore';
import { Restaurant } from '../types';
import { $ } from '../utils/dom';
import RestaurantDetailModal from './RestaurantDetailModal';

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
    this.$target.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.restaurant__favorite-button')) {
        const restaurantId = this.getRestaurantId(e);
        if (!restaurantId) return;

        restaurantStore.toggleFavorite(Number(restaurantId));
        return;
      }

      if ((e.target as HTMLElement).closest('.restaurant')) {
        const restaurantId = this.getRestaurantId(e);
        if (!restaurantId) return;

        new RestaurantDetailModal($('#restaurant-detail-modal'), {
          restaurantId: restaurantId,
        });
        $('#restaurant-detail-modal').classList.add('modal--open');
      }
    });
  }

  getRestaurantId(e: Event): number | null {
    const restaurantId = Number(
      (e.target as HTMLElement).closest('.restaurant')?.id,
    );
    if (!restaurantId) return null;
    if (restaurantId !== this.props.restaurant.id) return null;
    return restaurantId;
  }
}

export default RestaurantItem;
