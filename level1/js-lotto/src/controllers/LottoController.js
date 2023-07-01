import InputView from '../views/console/InputView.js';
import OutputView from '../views/console/OutputView.js';
import { LOTTO } from '../constants.js';
import Lotto from '../domains/Lotto.js';
import Bonus from '../domains/Bonus.js';
import LottoResult from '../domains/LottoResult.js';
import { pickUniqueNumbersInRange } from '../utils/Random.js';
import getInputWithValidation from '../utils/getInputWithValidation.js';
import {
  validateLottoNumbers,
  validatePurchaseAmount,
} from '../validators/index.js';

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
    const purchaseAmount = this.#readPurchaseAmount();
    const lottoCount = parseInt(purchaseAmount / LOTTO.PRICE);
    this.#lottos = this.#generateLottos(lottoCount);
    OutputView.printLottos(this.#lottos);
  }

  async #readPurchaseAmount() {
    const purchaseAmount = await getInputWithValidation(
      InputView.readPurchaseAmount,
      validatePurchaseAmount,
    );
    return purchaseAmount;
  }

  async readWinningNumbers() {
    const numbers = await getInputWithValidation(
      InputView.readWinningNumbers,
      validateLottoNumbers,
    );
    this.#winningNumbers = new Lotto(numbers);
  }

  async readBonusNumber() {
    const number = await getInputWithValidation(
      InputView.readBonusNumber,
      validateLottoNumbers,
    );
    this.#bonusNumber = new Bonus(this.#winningNumbers, number);
  }

  printLottoResult() {
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

      return new Lotto(numbers);
    });
  }
}

export default LottoController;
