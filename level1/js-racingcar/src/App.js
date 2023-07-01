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

  async play() {}
}

export default App;
