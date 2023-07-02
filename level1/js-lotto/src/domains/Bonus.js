import { validateBonusNumber } from '../validators';

class Bonus {
  #number;

  constructor(winningNumbers, number) {
    this.#number = number;
    this.#validate(winningNumbers, number);
  }

  #validate(winningNumbers, number) {
    validateBonusNumber(winningNumbers, number);
  }

  getNumber() {
    return this.#number;
  }
}

export default Bonus;
