import MovieClient from '../../api/movieClient';
import Component from '../../core/Component';
import { MovieResponse } from '../../types';
import { $ } from '../../utils/dom';
import MovieItem from './MovieItem';
import MovieListSkeleton from './MovieListSkeleton';

interface MovieListState {
  isLoading: boolean;
  movieList: MovieResponse[] | null;
}

class MovieList extends Component<{}, MovieListState> {
  setup() {
    this.state = {
      isLoading: false,
      movieList: null,
    };
  }

  template() {
    return `
      <h2>지금 인기 있는 영화</h2>
      <ul class="item-list"></ul>
      <button class="btn primary full-width">더 보기</button>
    `;
  }

  async componentDidMount() {
    await this.getPopularMoviesWithLoading();
  }

  componentDidUpdate() {
    const { isLoading, movieList } = this.state;

    if (isLoading) return new MovieListSkeleton($('.item-list'));

    return movieList?.forEach((movie: MovieResponse) => {
      new MovieItem($('.item-list'), {
        id: movie.id,
        PosterURL: movie.poster_path,
        title: movie.title,
        score: movie.vote_average,
      });
    });
  }

  async getPopularMoviesWithLoading() {
    try {
      this.setState({ isLoading: true });
      const movieList = await new MovieClient().getPopularMovies(1);
      this.setState({ movieList: movieList.results });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
}

export default MovieList;
