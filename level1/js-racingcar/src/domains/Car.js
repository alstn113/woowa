import { generateRandomNumber } from '../utils/Random.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = generateRandomNumber(1, 10);
    if (randomNumber >= 4) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
