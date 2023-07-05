import Component from '../core/Component';
import { $ } from '../utils/dom';
import RestaurantList from './RestaurantList';

class RestaurantTabs extends Component {
  template() {
    return `
      <div class="tabs">
        <button id="all-restaurants" class="tab text-bdoy tab--active">모든 음식점</button>
        <button id="favorite-restaurants"class="tab text-body">자주 가는 음식점</button>
      </div>
      `;
  }

  setEvent() {
    this.addEvent('click', '.tab', (event: Event) => {
      const $target = event.target as HTMLElement;
      const $tabs = this.$target.querySelectorAll('.tab');

      $tabs.forEach(($tab) => {
        $tab.classList.remove('tab--active');
      });
      $target.classList.add('tab--active');

      if ($target.closest('#all-restaurants')) {
        $('.restaurant-filter-container').classList.remove('filter-hidden');
        new RestaurantList($('.restaurant-list-container'), {
          isAllorFavorite: 'all',
        }).render();
        return;
      }

      if ($target.closest('#favorite-restaurants')) {
        $('.restaurant-filter-container').classList.add('filter-hidden');
        new RestaurantList($('.restaurant-list-container'), {
          isAllorFavorite: 'favorite',
        }).render();
      }
    });
  }
}

export default RestaurantTabs;
