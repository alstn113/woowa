const {
  validateBonusDuplicate,
  validateBonusType,
  validateBonusRange,
} = require('../validators/validator');

class Bonus {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#validate();
  }

  #validate() {
    validateBonusType(this.#bonusNumber);
    validateBonusRange(this.#bonusNumber);
    validateBonusDuplicate(this.#winningNumbers, this.#bonusNumber);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
