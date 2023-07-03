import Header from './components/Header';
import RestaurantAddModal from './components/RestaurantAddModal';
import RestaurantFilter from './components/RestaurantFilter';
import RestaurantList from './components/RestaurantList';
import Component from './core/Component';

class App extends Component {
  template() {
    return `
      ${new Header(this.$target).template()}
      <main class="main">
        ${new RestaurantFilter(this.$target).template()}
        ${new RestaurantList(this.$target).template()}
        ${new RestaurantAddModal(this.$target).template()}
      </main>
    `;
  }
  mounted() {}
}

export default App;

// header

// filter

// restaurant list - restaurant item

// modal

// store에 bind(this)를 해서 rerender를 만들고 적용하자!

// store을 싱글톤과 옵저버 패턴으로 작성해보자
