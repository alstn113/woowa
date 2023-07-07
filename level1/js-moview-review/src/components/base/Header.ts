import Component from '../../core/Component';
import Logo from '../../assets/logo.png';

interface HeaderProps {
  viewPopularMovieList: () => void;
  viewSearchMovieList: (searchKeyword: string) => void;
}

class Header extends Component<HeaderProps> {
  template() {
    const htmlTemplate = `
      <header>
        <h1><img class="home-logo" src="${Logo}" alt="MovieList 로고" /></h1>
        <div class="search-box">
          <input class="search-input" type="text" placeholder="검색" />
          <button class="search-button">검색</button>
        </div>
      </header>
    `;
    return { htmlTemplate };
  }

  setEvent() {
    // 로고 클릭 이벤트
    this.$target.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains('home-logo')) return;
      this.props.viewPopularMovieList();
    });

    // 검색 창 엔터 키 이벤트
    this.$target.addEventListener('keyup', (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      if (!target.classList.contains('search-input')) return;
      if (e.key !== 'Enter') return;
      this.props.viewSearchMovieList(target.value);
    });

    // 검색 창 버튼 클릭 이벤트
    this.$target.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (!target.classList.contains('search-button')) return;
      const input = this.$target.querySelector(
        '.search-input',
      ) as HTMLInputElement;
      this.props.viewSearchMovieList(input.value);
    });
  }
}

export default Header;
