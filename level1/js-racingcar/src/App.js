import InputView from './views/InputView';
import OutputView from './views/OutputView';
import RaceManager from './domains/RaceManager';

class App {
  #raceManager;

  constructor() {
    this.#raceManager = new RaceManager();
  }

  async play() {
    OutputView.printStartGame();

    const carNames = await InputView.readCarNames();
    this.#raceManager.setCars(carNames);

    const tryCount = await InputView.readTryCount();
    this.#raceManager.setTryCount(tryCount);

    const raceResult = this.#raceManager.startRace();
    OutputView.printFinalWinners(raceResult);

    InputView.close();
  }
}

export default App;
