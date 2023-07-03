import './css';

// core
import Component from './core/Component.js';

// domains
import LottoStore from '../../domains/LottoStore.js';
import Lotto from '../../domains/Lotto.js';
import Bonus from '../../domains/Bonus.js';
import LottoResult from '../../domains/LottoResult.js';

// components
import LottoList from './components/LottoList.js';
import LottoMoneyInput from './components/LottoMoneyInput.js';
import WinningNumbersInput from './components/WinningNumbersInput.js';
import LottoResultModal from './components/LottoResultModal.js';

// store
import store from './store.js';

class App extends Component {
  template() {
    return `
      <header class="header">
        <h1>🎱 행운의 로또</h1>
      </header/>
      <section>
        <div class="lotto-card">
          <div data-component="lotto-money-input" class="lotto-money-input"></div>
          <div data-component="lotto-list" class="lotto-list-container"></div>
          <div data-component="winning-numbers-input" class="winning-numbers-input"></div>
        </div>
      </section>
      <footer class="footer">
        <p>&copy Copyright 2023 woowacourse</p>
      </footer>
      <div data-component="lotto-result-modal"></div>
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
    new LottoList($lottoList);

    const $WinningNumbersInput = this.$target.querySelector(
      '[data-component="winning-numbers-input"]',
    );
    new WinningNumbersInput($WinningNumbersInput, {
      enterWinningNumbers: this.enterWinningNumbers.bind(this),
    });

    const $lottoResultModal = this.$target.querySelector(
      '[data-component="lotto-result-modal"]',
    );
    new LottoResultModal($lottoResultModal, {
      restartLottoGame: this.restartLottoGame.bind(this),
    });
  }

  buyLottos(amount) {
    try {
      const lottoStore = new LottoStore();
      const lottos = lottoStore.buyLottos(amount);
      store.setState({ lottos });
    } catch (error) {
      alert(error.message);
    }
  }

  enterWinningNumbers(winningNumbers, bonusNumber) {
    try {
      const winnnigLottos = new Lotto(winningNumbers);
      const bonus = new Bonus(winnnigLottos, bonusNumber);

      const lottoResult = new LottoResult(
        store.state.lottos,
        winnnigLottos,
        bonus,
      );

      store.setState({ lottoResult, isModalOpen: true });
    } catch (error) {
      alert(error.message);
    }
  }

  restartLottoGame() {
    store.setState({
      lottos: [],
      lottoResult: null,
      isModalOpen: false,
    });
  }
}

export default App;
