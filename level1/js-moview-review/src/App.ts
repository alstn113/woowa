import MovieList from './components/MovieList/MovieList';
import Header from './components/base/Header';
import Component from './core/Component';
import { $ } from './utils/dom';

class App extends Component {
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
    new Header($('[data-component="header"]'));
    new MovieList($('[data-component="movie-list"]'));
  }
}

export default App;
