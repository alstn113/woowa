import Component from './core/Component.js';

// domains
import LottoStore from '../../domains/LottoStore.js';

// components
import LottoMoneyInput from './components/LottoMoneyInput.js';
import LottoList from './components/LottoList.js';

import './css';

class App extends Component {
  setup() {
    this.$state = {
      lottos: [],
    };
  }

  template() {
    return `
      <header class="header">
        <h1>🎱 행운의 로또</h1>
      </header/>
      <section>
        <div class="lotto-card">
          <div data-component="lotto-money-input" class="lotto-money-input"></div>
          <div data-component="lotto-list" class="lotto-list"></div>
        <div>
      </section>
      <footer class="footer">
        <p>&copy Copyright 2023 woowacourse</p>
      </footer>
    `;
  }

  mounted() {
    const $lottoMoneyInput = this.$target.querySelector(
      '[data-component="lotto-money-input"]',
    );
    new LottoMoneyInput($lottoMoneyInput, {
      buyLottos: this.buyLottos.bind(this),
    });

    const $lottoList = this.$target.querySelector(
      '[data-component="lotto-list"]',
    );
    new LottoList($lottoList, { lottos: this.$state.lottos });
  }

  buyLottos(amount) {
    const lottoStore = new LottoStore();
    const lottos = lottoStore.buyLottos(amount);
    this.setState({ lottos });
  }
}

export default App;
