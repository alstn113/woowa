import Component from '../core/Component';
import { $ } from '../utils/dom';
import MovieItem from './MovieItem';

class MovieList extends Component {
  template() {
    return `
      <ul class="item-list"></ul>
    `;
  }

  mounted() {
    new MovieItem($('.item-list'));
  }
}

export default MovieList;
