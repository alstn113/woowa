import Header from './components/base/Header';
import RestaurantAddModal from './components/RestaurantAddModal';
import RestaurantFilter from './components/RestaurantFilter';
import RestaurantList from './components/RestaurantList';
import Component from './core/Component';
import { $ } from './utils/dom';

class App extends Component {
  template() {
    return `
      <header class="gnb"></header>
      <main>
        <section class="restaurant-filter-container"></section>
        <section class="restaurant-list-container"></section>
        <div class="modal modal__open"></div>
      </main>
    `;
  }

  mounted() {
    new Header($('.gnb'));
    new RestaurantFilter($('.restaurant-filter-container'));
    new RestaurantList($('.restaurant-list-container'));
    new RestaurantAddModal($('.modal'));
  }
}

export default App;

// restaurant list - restaurant item

// modal

// store에 bind(this)를 해서 rerender를 만들고 적용하자!

// store을 싱글톤과 옵저버 패턴으로 작성해보자
