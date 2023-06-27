const LottoManager = require('./domains/LottoManager');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./constants/constants');

class App {
  #lottoManager;

  constructor() {
    this.#lottoManager = new LottoManager();
  }

  #buyLottos() {
    this.#enterPurchaseAmount();
  }

  #enterPurchaseAmount() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (money) => {
      const lottoCount = this.#lottoManager.getLottoCount(Number(money));
      this.#lottoManager.generateLottos(lottoCount);
      this.#lottoManager.printLottos(lottoCount);
      this.#enterWinningNumbers();
    });
  }

  #enterWinningNumbers() {
    Console.readLine(MESSAGES.ENTER_WINNING_NUMBERS, (winnningNumbers) => {
      this.#lottoManager.setWinningNumbers(winnningNumbers);
      this.#enterBonusNumber();
    });
  }

  #enterBonusNumber() {
    Console.readLine(MESSAGES.ENTER_BONUS_NUMBER, (bonusNumber) => {
      this.#lottoManager.setBonusNumber(bonusNumber);
      this.#lottoManager.printResult();
    });
  }

  play() {
    this.#buyLottos();
  }
}

const app = new App();
app.play();

module.exports = App;
