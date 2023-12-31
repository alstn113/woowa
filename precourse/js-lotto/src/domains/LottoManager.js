const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const { MESSAGES, LOTTO_OPTIONS } = require('../constants/constants');
const { Random, Console } = require('@woowacourse/mission-utils');
const {
  validateNumbersType,
  validatePrice,
} = require('../validators/validator');
const LottoResult = require('./LottoResult');

class LottoManager {
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#winningNumbers = null;
    this.#bonusNumber = null;
  }

  getLottoCount(money) {
    validatePrice(money);
    return parseInt(money / LOTTO_OPTIONS.LOTTO_PRICE);
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#lottos.push(this.#generateLotto());
    }
  }

  printLottos() {
    const lottoCount = this.#lottos.length;
    Console.print(MESSAGES.PURCHASE_RESPONSE(lottoCount));
    this.#lottos.forEach((lotto) => {
      const toString = `[${lotto.join(', ')}]`;
      Console.print(toString);
    });
  }

  #generateLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_OPTIONS.LOTTO_MIN_NUMBER,
      LOTTO_OPTIONS.LOTTO_MAX_NUMBER,
      LOTTO_OPTIONS.LOTTO_COUNT,
    ).sort((a, b) => a - b);
    const lotto = new Lotto(randomNumbers);
    return lotto.numbers;
  }

  setWinningNumbers(winningNumbers) {
    const numbers = winningNumbers
      .split(',')
      // parseInt는 완전히 숫자로 변환
      // Number는 숫자로 변환되지 않는 경우 NaN을 반환
      .map((number) => Number(number))
      .sort((a, b) => a - b);
    validateNumbersType(numbers);
    this.#winningNumbers = new Lotto(numbers);
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = new Bonus(this.#winningNumbers.numbers, bonusNumber);
  }

  printResult() {
    const lottoResult = new LottoResult(
      this.#lottos,
      this.#winningNumbers.numbers,
      this.#bonusNumber.bonusNumber,
    );

    lottoResult.printResult();
  }
}

module.exports = LottoManager;
