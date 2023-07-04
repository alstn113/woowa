import Component from '../../core/Component';
import { $ } from '../../utils/dom';

class Header extends Component {
  template() {
    return `
      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" class="gnb__button" aria-label="음식점 추가">
        <img src="./add-button.png" alt="음식점 추가" />
      </button>
  `;
  }

  setEvent() {
    const addButton = $('.gnb__button');
    addButton.addEventListener('click', () => {
      $('.modal').classList.add('modal--open');
    });
  }
}

export default Header;
