import Component from '../core/Component';

class RestaurantDetailModal extends Component {
  template() {
    return `
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <h2 class="modal-title text-title">새로운 음식점</h2>
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
