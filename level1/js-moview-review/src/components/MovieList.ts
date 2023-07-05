import MovieClient from '../api/movieClient';
import Component from '../core/Component';
import { $ } from '../utils/dom';
import MovieItem from './MovieItem';

class MovieList extends Component {
  template() {
    return `
      <ul class="item-list"></ul>
    `;
  }

  async mounted() {
    const movieClient = new MovieClient();
    const movieList = await movieClient.getPopularMovies();

    movieList.results.forEach((move) => {
      new MovieItem($('.item-list'), {
        title: move.title,
        score: move.vote_average,
        thumbnail: move.poster_path,
      });
    });
  }
}

export default MovieList;
