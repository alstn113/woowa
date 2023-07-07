import Component from '../../core/Component';
import Logo from '../../assets/logo.png';

class Header extends Component {
  template() {
    return `
      <header>
        <h1><img src="${Logo}" alt="MovieList 로고" /></h1>
        <div class="search-box">
          <input class="search-input" type="text" placeholder="검색" />
          <button class="search-button">검색</button>
        </div>
      </header>
    `;
  }

  setEvent() {
    this.$target.addEventListener('keyup', (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      if (!target.classList.contains('search-input')) return;
      if (e.key !== 'Enter') return;
    });

    this.$target.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (!target.classList.contains('search-button')) return;
      const input = this.$target.querySelector(
        '.search-input',
      ) as HTMLInputElement;
    });
  }
}

export default Header;
