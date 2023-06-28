const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  play() {
    OutputView.startGame();
    InputView.readBridgeSize(() => {
      this.#moving();
    });
  }

  #moving() {
    InputView.readMoving(() => {
      this.#moving();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
