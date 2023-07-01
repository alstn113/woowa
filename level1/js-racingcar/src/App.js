import { Console } from './utils/Console';
import InputView from './views/InputView';
// import OutputView from './views/OutputView';

class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    // this.#outputView = new this.OutputView();
  }

  async play() {
    this.#inputView.readCarNames();
    // 자동차 이름 입력
    //
    // 시도할 횟수 입력
    //
    // 실행 결과 출력 (과정, 결과)
  }
}

export default App;
