import Component from '../../core/Component';

class Header extends Component {
  template() {
    return `
    <header>
      <h1><img src="./logo.png" alt="MovieList 로고" /></h1>
      <div class="search-box">
        <input type="text" placeholder="검색" />
        <button class="search-button">검색</button>
      </div>
    </header>
    `;
  }
}

export default Header;
