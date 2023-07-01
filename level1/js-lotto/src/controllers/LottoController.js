import InputView from '../views/console/InputView.js';
import OutputView from '../views/console/OutputView.js';
import { LOTTO } from '../constants.js';
import Lotto from '../domains/Lotto.js';
import Bonus from '../domains/Bonus.js';
import LottoResult from '../domains/LottoResult.js';
import { pickUniqueNumbersInRange } from '../utils/Random.js';

class LottoController {
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#lottos = null;
    this.#winningNumbers = null;
    this.#bonusNumber = null;
  }

  async buyLottos() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    const lottoCount = parseInt(purchaseAmount / LOTTO.PRICE);
    this.#lottos = this.#generateLottos(lottoCount);
    OutputView.printLottos(this.#lottos);
  }

  async readWinningNumbers() {
    const numbers = await InputView.readWinningNumbers();
    this.#winningNumbers = new Lotto(numbers);
  }

  async readBonusNumber() {
    const number = await InputView.readBonusNumber(this.#winningNumbers);
    this.#bonusNumber = new Bonus(this.#winningNumbers, number);
  }

  printResult() {
    const lottoResult = new LottoResult(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    OutputView.printResult(lottoResult);
    InputView.close();
  }

  #generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }).map(() => {
      const numbers = pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.COUNT,
      );

      const lotto = new Lotto(numbers);
      return lotto;
    });
  }
}

export default LottoController;
