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
    // 자동차 이름 입력
    const carNames = await this.#inputView.readCarNames();

    // 시도할 횟수 입력
    const tryCount = await this.#inputView.readTryCount();

    // 게임 결과
    this.#outputView.printRaceResult();

    this.#inputView.close();
  }
}

export default App;
