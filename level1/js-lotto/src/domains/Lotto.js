import { validateLottoNumbers } from '../validators';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }
}

export default Lotto;
