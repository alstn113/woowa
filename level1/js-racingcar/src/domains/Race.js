import { generateRandomNumber } from '../utils/Random';

class Race {
  #cars;
  #random;

  constructor(cars, random = generateRandomNumber) {
    this.#cars = cars;
    this.#random = random;
  }

  progress() {
    this.#cars.forEach((car) => {
      const randomNumber = this.#random(1, 10);
      if (randomNumber >= 4) car.move();
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter(
      (car) => car.getPosition() === maxPosition,
    );
    return winners;
  }

  getCars() {
    return this.#cars;
  }
}

export default Race;
