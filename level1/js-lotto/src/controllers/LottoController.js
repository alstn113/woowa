import InputView from '../views/console/InputView.js';
import OutputView from '../views/console/OutputView.js';
import { COMMAND, LOTTO } from '../constants.js';
import Lotto from '../domains/Lotto.js';
import Bonus from '../domains/Bonus.js';
import LottoResult from '../domains/LottoResult.js';
import { pickUniqueNumbersInRange } from '../utils/Random.js';
import getInputWithValidation from '../utils/getInputWithValidation.js';
import {
  validateLottoNumbers,
  validatePurchaseAmount,
  validateCommand,
  validateBonusNumber,
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

  async readPurchaseAmount() {
    const purchaseAmount = await getInputWithValidation(
      InputView.readPurchaseAmount,
      validatePurchaseAmount,
    );
    const lottoCount = parseInt(purchaseAmount / LOTTO.PRICE);
    this.#lottos = this.#generateLottos(lottoCount);
    OutputView.printLottos(this.#lottos);
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
      validateBonusNumber(this.#winningNumbers),
    );
    this.#bonusNumber = new Bonus(this.#winningNumbers, number);
  }

  async readCommand() {
    const command = await getInputWithValidation(
      InputView.readCommand,
      validateCommand,
    );

    switch (command) {
      case COMMAND.RETRY:
        return true;
      case COMMAND.EXIT:
        return false;
    }
  }

  printLottoResult() {
    const lottoResult = new LottoResult(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    OutputView.printLottoResult(lottoResult);
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

  exit() {
    InputView.close();
  }
}

export default LottoController;
