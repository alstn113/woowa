const { ERROR_MESSAGES } = require('../constants/Messages');
const LottoException = require('../exception/LottoException');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    this.#validateLottoCount();
    this.#validateDuplicateLotto();
    this.#validateLottoRange();
  }

  #validateLottoCount() {
    if (this.#numbers.length !== 6) {
      throw new LottoException(ERROR_MESSAGES.LOTTO_WRONG_LENGTH);
    }
  }

  #validateDuplicateLotto() {
    const set = new Set(this.#numbers);
    if (set.size !== this.#numbers.length) {
      throw new LottoException(ERROR_MESSAGES.LOTTO_DUPLICATED_NUMBER);
    }
  }

  #validateLottoRange() {
    if (!this.#numbers.every((number) => 1 <= number && number <= 45))
      throw new LottoException(ERROR_MESSAGES.LOTTO_OUT_OF_RANGE);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
