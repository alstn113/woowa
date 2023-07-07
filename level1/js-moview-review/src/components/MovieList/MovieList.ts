import movieClient from '../../api/movieClient';
import Component from '../../core/Component';
import { MovieResponse, PageType } from '../../types';
import { $ } from '../../utils/dom';
import MovieItem from './MovieItem';
import MovieListSkeleton from './MovieListSkeleton';

interface MovieListProps {
  pageType: PageType;
  searchKeyword: string;
}

interface MovieListState {
  isLoading: boolean;
  movieList: MovieResponse[];
  hasNextPage: boolean;
  currentPage: number;
}

class MovieList extends Component<MovieListProps, MovieListState> {
  setup() {
    this.state = {
      isLoading: false,
      movieList: [],
      hasNextPage: true,
      currentPage: 0,
    };
  }

  template() {
    const { pageType, searchKeyword } = this.props;
    const { isLoading, movieList } = this.state;

    const title =
      pageType === 'popularMovieList'
        ? '지금 인기 있는 영화'
        : `"${searchKeyword}" 검색 결과`;

    const htmlTemplate = `
      <h2 class="item-title">${title}</h2>
      <ul class="item-list"></ul>
      <button id="more-button" class="btn primary full-width">더 보기</button>
    `;

    return {
      htmlTemplate,
      renderComponents: () => {
        console.log($('.item-list'));

        if (isLoading) return new MovieListSkeleton($('.item-list'));

        movieList.forEach((movie: MovieResponse) => {
          new MovieItem($('.item-list'), {
            id: movie.id,
            PosterURL: movie.poster_path,
            title: movie.title,
            score: movie.vote_average,
          });
        });
      },
    };
  }

  async componentDidMount() {
    await this.getInfiniteMovies();
  }

  setEvent() {
    this.$target.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (!(target.id === 'more-button')) return;
      this.handleLoadMore();
    });
  }

  async getInfiniteMovies() {
    const { currentPage, isLoading, hasNextPage } = this.state;
    const nextPage = currentPage + 1;

    if (isLoading || !hasNextPage) return;

    this.setState({ isLoading: true });

    try {
      const getMovieList =
        this.props.pageType === 'popularMovieList'
          ? movieClient.getPopularMovieList(nextPage)
          : movieClient.getSearchMovieList(this.props.searchKeyword, nextPage);
      this.props.searchKeyword, nextPage;

      const movies = await getMovieList;
      this.setState({
        isLoading: false,
        movieList: [...this.state.movieList, ...movies.results],
        currentPage: nextPage,
        hasNextPage: currentPage < movies.total_pages,
      });
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      this.setState({ isLoading: false });
    }
  }

  async handleLoadMore() {
    await this.getInfiniteMovies();
  }
}

export default MovieList;
