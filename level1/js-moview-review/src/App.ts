import MovieDetailModal from './components/MovieDetailModal';
import MovieList from './components/MovieList/MovieList';
import Header from './components/base/Header';
import Component from './core/Component';
import { PageType } from './types';
import { $ } from './utils/dom';

interface AppProps {
  pageType: PageType;
  searchKeyword: string;
}

class App extends Component<{}, AppProps> {
  setup() {
    this.state = {
      pageType: 'popularMovieList',
      searchKeyword: '',
    };
  }

  template() {
    const htmlTemplate = `
      <div data-component="header"></div>
      <main>
        <section class="item-view">
          <div data-component="movie-list"></div>
        </section>
      </main>
      <div data-component="modal" class="modal modal--open"></div>
    `;

    return {
      htmlTemplate,
      renderComponents: () => {
        new Header($('[data-component="header"]'), {
          viewPopularMovieList: this.viewPopularMovieList.bind(this),
          viewSearchMovieList: this.viewSearchMovieList.bind(this),
        });
        new MovieList($('[data-component="movie-list"]'), {
          pageType: this.state.pageType,
          searchKeyword: this.state.searchKeyword,
        });
      },
    };
  }

  viewPopularMovieList() {
    this.setState({ pageType: 'popularMovieList', searchKeyword: '' });
  }

  viewSearchMovieList(searchKeyword: string) {
    this.setState({ pageType: 'searchMovieList', searchKeyword });
  }
}

export default App;
