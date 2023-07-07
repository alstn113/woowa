import movieClient from '../../api/movieClient';
import Component from '../../core/Component';
import { MovieResponse, PageType } from '../../types';
import { $ } from '../../utils/dom';
import MovieItem from './MovieItem';
import MovieListSkeleton from './MovieListSkeleton';

interface MovieListProps {
  pageType: PageType;
  searchKeyword: string | null;
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
    const title =
      pageType === 'popularMovieList'
        ? '지금 인기 있는 영화'
        : `"${searchKeyword}" 검색 결과`;

    return `
      <h2 class="item-title">${title}</h2>
      <ul class="item-list"></ul>
      <button id="more-button" class="btn primary full-width">더 보기</button>
    `;
  }

  async componentDidMount() {
    await this.getInfiniteMovies();
  }

  componentDidUpdate() {
    const { isLoading, movieList } = this.state;

    movieList.forEach((movie: MovieResponse) => {
      new MovieItem($('.item-list'), {
        id: movie.id,
        PosterURL: movie.poster_path,
        title: movie.title,
        score: movie.vote_average,
      });
    });

    if (isLoading) new MovieListSkeleton($('.item-list'));
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
      const movies = await movieClient.getPopularMovieList(nextPage);
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
