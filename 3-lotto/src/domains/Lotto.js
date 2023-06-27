const {
  validateLottoCount,
  validateLottoRange,
  validateLottoType,
  validateLottoDuplicate,
} = require('../validators/validator');

class Lotto {
  // # prefix 제거 금지
  // 다른 필드 추가 금지
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    validateLottoCount(this.#numbers);
    validateLottoRange(this.#numbers);
    validateLottoType(this.#numbers);
    validateLottoDuplicate(this.#numbers);
  }

  //TODO: 기능 추가
  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
