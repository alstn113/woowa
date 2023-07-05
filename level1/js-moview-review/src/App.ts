import MovieList from './components/MovieList';
import Header from './components/base/Header';
import Component from './core/Component';
import { $ } from './utils/dom';

class App extends Component {
  template() {
    return `
    <header data-component="header"></header>
    <main>
      <section class="item-view">
        <h2>지금 인기 있는 영화</h2>
        <ul data-component="movie-list" class="item-list"></ul>
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
