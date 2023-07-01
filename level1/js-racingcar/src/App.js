import InputView from './views/InputView';
import OutputView from './views/OutputView';
import RaceManager from './domains/RaceManager';

class App {
  #inputView;
  #outputView;
  #raceManager;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#raceManager = new RaceManager();
  }

  async play() {
    this.#outputView.printStartGame();

    const carNames = await this.#inputView.readCarNames();
    this.#raceManager.setCars(carNames);

    const tryCount = await this.#inputView.readTryCount();
    this.#raceManager.setTryCount(tryCount);

    const raceResult = this.#raceManager.startRace();
    this.#outputView.printRaceResult(raceResult);

    this.#inputView.close();
  }
}

export default App;
