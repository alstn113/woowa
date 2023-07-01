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
    for (let i = 0; i < this.#tryCount; i++) {
      this.#processRace();
    }

    return this.#cars; //TODO: raceResult 반환하기
  }

  #processRace() {
    this.#cars.forEach((car) => car.move());
  }
}

export default RageManager;
