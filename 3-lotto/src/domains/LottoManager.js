const Lotto = require('./Lotto');
const InvalidInputException = require('../exception/InvalidInputException');
const { MESSAGES, ERROR_MESSAGES } = require('../constants/Messages');
const { Random, Console } = require('@woowacourse/mission-utils');

class LottoManager {
  #lottos;
  #winningNumbers;

  constructor() {
    this.#lottos = [];
    this.#winningNumbers = null;
  }

  #validatePrice(price) {
    if (isNaN(price))
      throw new InvalidInputException(ERROR_MESSAGES.INVALID_INPUT);
    if (price < 0) throw new InvalidInputException(ERROR_MESSAGES.LEAST_PRICE);
    if (price % 1000 !== 0)
      throw new InvalidInputException(ERROR_MESSAGES.NOT_MULTIPLE_OF_1000);
  }

  #validateNumbersType(numbers) {
    if (
      !numbers.every((number) => typeof number === 'number' && !isNaN(number))
    )
      throw new InvalidInputException(ERROR_MESSAGES.LOTTO_WRONG_TYPE);
  }

  getLottoCount(money) {
    this.#validatePrice(money);
    return parseInt(money / 1000);
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
      Console.print(lotto);
    });
  }

  #generateLotto() {
    const sortedRandomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    const lotto = new Lotto(sortedRandomNumbers);
    return lotto.numbers;
  }

  setWinningNumbers(winningNumbers) {
    const numbers = winningNumbers
      .split(',')
      // parseInt는 완전히 숫자로 변환
      // Number는 숫자로 변환되지 않는 경우 NaN을 반환
      .map((number) => Number(number))
      .sort((a, b) => a - b);
    this.#validateNumbersType(numbers);
    this.#winningNumbers = new Lotto(numbers);
  }
}

module.exports = LottoManager;
