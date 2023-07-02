import InputView from '../views/console/InputView.js';
import OutputView from '../views/console/OutputView.js';
import { COMMAND } from '../constants.js';
import Lotto from '../domains/Lotto.js';
import Bonus from '../domains/Bonus.js';
import LottoResult from '../domains/LottoResult.js';
import {
  validateLottoNumbers,
  validatePurchaseAmount,
  validateCommand,
  validateBonusNumber,
} from '../validators/index.js';
import LottoStore from '../domains/LottoStore.js';
import handleAsyncError from '../utils/handleAsyncError.js';

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
    handleAsyncError(async () => {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const lottoStore = new LottoStore();
      this.lottos = lottoStore.buyLottos(purchaseAmount); // validatePurchaseAmount
      OutputView.printLottos(this.#lottos);
    });
  }

  async readWinningNumbers() {
    handleAsyncError(async () => {
      const numbers = await InputView.readWinningNumbers();
      this.#winningNumbers = new Lotto(numbers); // validateLottoNumbers
    });
  }

  async readBonusNumber() {
    handleAsyncError(async () => {
      const number = await InputView.readBonusNumber();
      this.#bonusNumber = new Bonus(this.#winningNumbers, number); // validateBonusNumber
    });
  }

  async readCommand() {
    handleAsyncError(async () => {
      const command = await InputView.readCommand();
      validateCommand(command);

      switch (command) {
        case COMMAND.RETRY:
          return true;
        case COMMAND.EXIT:
          return false;
      }
    });
  }

  printLottoResult() {
    const lottoResult = new LottoResult(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    OutputView.printLottoResult(lottoResult);
  }

  exit() {
    InputView.close();
  }
}

export default LottoController;
