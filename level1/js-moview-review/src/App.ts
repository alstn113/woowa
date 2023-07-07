import MovieList from './components/MovieList/MovieList';
import Header from './components/base/Header';
import Component from './core/Component';
import { PageType } from './types';
import { $ } from './utils/dom';

interface AppProps {
  pageType: PageType;
  searchKeyword: string | null;
}

class App extends Component<{}, AppProps> {
  setup() {
    this.state = {
      pageType: 'popularMovieList',
      searchKeyword: null,
    };
  }
  template() {
    return `
    <div data-component="header"></div>
    <main>
      <section class="item-view">
        <div data-component="movie-list"></div>
      </section>
    </main>
    `;
  }

  componentDidMount() {
    new Header($('[data-component="header"]'), {
      viewPopularMovieList: this.viewPopularMovieList.bind(this),
      viewSearchMovieList: this.viewSearchMovieList.bind(this),
    });
    new MovieList($('[data-component="movie-list"]'));
  }

  viewPopularMovieList() {
    this.setState({ pageType: 'popularMovieList', searchKeyword: null });
  }

  viewSearchMovieList(searchKeyword: string) {
    this.setState({ pageType: 'searchMovieList', searchKeyword });
  }
}

export default App;
