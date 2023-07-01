import OutputView from '../views/OutputView.js';
import Car from './Car.js';

class RageManager {
  #cars;
  #tryCount;

  constructor() {
    this.#cars = [];
    this.#tryCount = 0;
  }

  setCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  startRace() {
    OutputView.printRaceResult();

    for (let i = 0; i < this.#tryCount; i++) {
      this.#processRace();
    }

    const winners = this.#getWinners();
    return winners;
  }

  #getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter(
      (car) => car.getPosition() === maxPosition,
    );
    return winners;
  }

  #processRace() {
    this.#cars.forEach((car) => {
      car.move();
    });
    OutputView.printRaceProgress(this.#cars);
  }
}

export default RageManager;
