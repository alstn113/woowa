import { validateLottoNumbers } from '../validators';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#sortNumbers(numbers);
    this.#validate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }
}

export default Lotto;
