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
      <div class="restaurant-detail" id=${id}>
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
            <div class="restaurant__detail__description" text-body">${description}</p>
            ${
              link
                ? `
                <div class="restaurant__link">
                  참고 링크:
                  <a href="${link}" class="text-body">
                    ${link}
                  </a>
                </div>
                `
                : ''
            }
          </div>
        </div>
      </div>
      <div class="button-container">
        <button
          type="button"
          class="button button--secondary text-caption"
        >
          삭제
        </button>
        <button class="button button--primary text-caption">
          닫기
        </button>
      </div>
    </div>
    `;
  }

  setEvent() {
    // 닫기 버튼
    this.addEvent('click', '.modal-backdrop', () => {
      this.$target.classList.remove('modal--open');
    });

    // 닫기 버튼
    this.addEvent('click', '.button--primary', () => {
      this.$target.classList.remove('modal--open');
    });

    // 삭제 버튼
    this.addEvent('click', '.button--secondary', () => {
      const { restaurantId } = this.props;
      restaurantStore.removeRestaurant(restaurantId);
      this.$target.classList.remove('modal--open');
    });

    // 즐겨찾기 버튼
    this.addEvent('click', '.restaurant__favorite-button', (e) => {
      const restaurantId = Number(
        (e.target as HTMLElement).closest('.restaurant-detail')?.id,
      );
      if (restaurantId !== this.props.restaurantId) return;

      restaurantStore.toggleFavorite(restaurantId);
      this.render();
    });
  }
}

export default RestaurantDetailModal;
