import { generateRandomNumber } from '../utils/Random.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = '';
  }

  move() {
    const randomNumber = generateRandomNumber();
    if (randomNumber >= 4) this.#position += '-';
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
