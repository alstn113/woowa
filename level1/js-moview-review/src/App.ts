import MovieList from './components/MovieList';
import Header from './components/base/Header';
import Component from './core/Component';
import { $ } from './utils/dom';

class App extends Component {
  template() {
    return `
    <div data-component="header"></div>
    <main>
      <section class="item-view">
        <h2>지금 인기 있는 영화</h2>
        <div data-component="movie-list"></div>
        <button class="btn primary full-width">더 보기</button>
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
