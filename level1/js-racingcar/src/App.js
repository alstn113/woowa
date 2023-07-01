import InputView from './views/InputView';
import OutputView from './views/OutputView';

class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    this.#outputView.printStartGame();

    const carNames = await this.#inputView.readCarNames();

    const tryCount = await this.#inputView.readTryCount();

    this.#outputView.printRaceResult();

    this.#inputView.close();
  }
}

export default App;
