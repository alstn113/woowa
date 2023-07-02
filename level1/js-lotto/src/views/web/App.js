import Component from './core/Component.js';
import LottoCard from './components/LottoCard.js';

import './css';

class App extends Component {
  setup() {
    this.$state = {
      purchaseAmount: null,
    };
  }

  template() {
    return `
      <header class="header">
        <h1>🎱 행운의 로또</h1>
      </header/>
      <section>
        <div data-component="lotto-card" class="lotto-card" />
      </section>
      <footer class="footer">
        <p>&copy Copyright 2023 woowacourse</p>
      </footer>
    `;
  }

  mounted() {
    const $lottoCard = this.$target.querySelector(
      '[data-component="lotto-card"]',
    );
    new LottoCard($lottoCard, {
      setPurchaseAmount: this.setPurchaseAmount.bind(this),
    });
  }

  setPurchaseAmount(amount) {
    this.setState({ purchaseAmount: amount });
    console.log(this.$state.purchaseAmount);
  }
}

export default App;
