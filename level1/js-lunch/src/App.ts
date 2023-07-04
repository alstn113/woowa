import Header from './components/base/Header';
import RestaurantAddModal from './components/RestaurantAddModal';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import RestaurantFilter from './components/RestaurantFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantTabs from './components/RestaurantTabs';
import Component from './core/Component';
import { $ } from './utils/dom';

class App extends Component {
  template() {
    return `
      <header class="gnb"></header>
      <main>
        <section class="restaurant-taps"></section>
        <section class="restaurant-filter-container"></section>
        <section class="restaurant-list-container"></section>
        <div id="restaurant-add-modal" class="modal"></div>
        <div id="restaurant-detail-modal" class="modal"></div>
      </main>
    `;
  }

  mounted() {
    new Header($('.gnb'));
    new RestaurantTabs($('.restaurant-taps'));
    new RestaurantFilter($('.restaurant-filter-container'));
    new RestaurantList($('.restaurant-list-container'));
  }
}

export default App;
