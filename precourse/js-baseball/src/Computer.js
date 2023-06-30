const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #answerNumbers;

  constructor() {
    this.#answerNumbers = [];
    this.startGame();
  }

  #generateNumbers() {
    while (this.#answerNumbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.#answerNumbers.includes(randomNumber)) {
        this.#answerNumbers.push(randomNumber);
      }
    }
  }

  checkNumbers(numbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (this.#answerNumbers[i] === numbers[i]) strike++;
      else if (this.#answerNumbers.includes(numbers[i])) ball++;
    }
    return { strike, ball };
  }

  get answerNumbers() {
    return this.#answerNumbers;
  }

  set answerNumbers(numbers) {
    this.#answerNumbers = numbers;
  }

  #resetNumbers() {
    this.#answerNumbers = [];
  }

  startGame() {
    this.#resetNumbers();
    this.#generateNumbers();
  }
}

module.exports = Computer;
