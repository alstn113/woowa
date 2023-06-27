const {
  validateLottoCount,
  validateLottoRange,
  validateLottoType,
} = require('../validators/validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    validateLottoCount(this.#numbers);
    validateLottoRange(this.#numbers);
    validateLottoType(this.#numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
