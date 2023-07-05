import MovieClient from '../api/movieClient';
import Component from '../core/Component';
import { MovieResponse } from '../types';
import { $ } from '../utils/dom';
import MovieItem from './MovieItem';
import MovieListSkeleton from './MovieItemSkeleton';

interface MovieListState {
  isLoading: boolean;
  movieList: MovieResponse[] | null;
}

class MovieList extends Component<{}, MovieListState> {
  state: MovieListState = {
    isLoading: false,
    movieList: null,
  };

  template() {
    return `<ul class="item-list"></ul>`;
  }

  async componentDidMount() {
    await this.getPopularMoviesWithLoading();
  }

  componentDidUpdate() {
    const { isLoading, movieList } = this.state;

    if (isLoading) return new MovieListSkeleton($('.item-list'));

    return movieList?.forEach((movie: MovieResponse) => {
      new MovieItem($('.item-list'), {
        title: movie.title,
        score: movie.vote_average,
        thumbnail: movie.poster_path,
      });
    });
  }

  async getPopularMoviesWithLoading() {
    try {
      this.setState({ isLoading: true });
      const movieList = await new MovieClient().getPopularMovies();
      this.setState({ movieList: movieList.results });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
}

export default MovieList;
