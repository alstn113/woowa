import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Car from '../domains/Car.js';
import Race from '../domains/Race.js';

class RaceController {
  #race;
  #tryCount;

  constructor() {
    this.#race = null;
    this.tryCount = 0;
  }

  async init() {
    OutputView.printStartGame();

    const carNames = await InputView.readCarNames();
    const cars = carNames.map((carName) => new Car(carName));

    this.#tryCount = await InputView.readTryCount();

    this.#race = new Race(cars);
  }

  startRace() {
    OutputView.printRaceResult();
    Array.from({ length: this.#tryCount }).forEach(() => {
      this.#race.progress();
      OutputView.printRaceProgress(this.#race.getCars());
    });
  }

  printRaceResult() {
    const winners = this.#race.getWinners();
    OutputView.printFinalWinners(winners);
    InputView.close();
  }
}

export default RaceController;
