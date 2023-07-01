import RaceController from './controllers/RaceController';

class App {
  #raceController;

  constructor() {
    this.#raceController = new RaceController();
  }

  async play() {
    await this.#raceController.init();
    this.#raceController.startRace();
    this.#raceController.printRaceResult();
  }
}

export default App;
