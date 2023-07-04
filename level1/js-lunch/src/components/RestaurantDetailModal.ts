import Component from '../core/Component';

class RestaurantDetailModal extends Component {
  template() {
    return `
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <h2 class="modal-title text-title">새로운 음식점</h2>
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
  }
}

export default RestaurantDetailModal;
