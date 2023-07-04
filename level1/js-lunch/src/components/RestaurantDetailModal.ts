import { CATEGORY_ICON_PATH, FAVORITE_ICON_PATH } from '../constants';
import Component from '../core/Component';
import restaurantStore from '../lib/RestaurantStore';

interface RestaurantDetailModalProps {
  restaurantId: number;
}

class RestaurantDetailModal extends Component<RestaurantDetailModalProps> {
  template() {
    const { restaurantId } = this.props;
    const { id, category, name, favorite, description, distance, link } =
      restaurantStore.getRestaurant(restaurantId);

    const FavoriteIcon = favorite
      ? FAVORITE_ICON_PATH['filled']
      : FAVORITE_ICON_PATH['lined'];

    return `
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <div id=${id}>
        <div class="restaurant__detail">
          <div>
            <div class="restaurant__category">
              <img src="${CATEGORY_ICON_PATH[category]}" class="category-icon">
            </div>
            <button class="restaurant__favorite-button">
              <img src="${FavoriteIcon}" alt="즐겨찾기" />
            </button>
          </div>
          <div class="restaurant__info">
            <h3 class="restaurant__name text-subtitle">${name}</h3>
            <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
            <p class="restaurant__description--not-overflow" text-body">${description}</p>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button
          type="button"
          class="button button--secondary text-caption"
        >
          취소하기
        </button>
        <button class="button button--primary text-caption">
          추가하기
        </button>
      </div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.modal-backdrop', () => {
      this.$target.classList.remove('modal--open');
    });

    this.addEvent('click', '.button--secondary', () => {
      this.$target.classList.remove('modal--open');
    });

    this.addEvent('click', '.button--primary', () => {
      this.$target.classList.remove('modal--open');
    });
  }
}

export default RestaurantDetailModal;
