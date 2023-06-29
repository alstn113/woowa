const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeGame = require('./domains/BridgeGame');
const { COMMAND } = require('./constants');

class App {
  #bridgeGame;
  #totalAttempts;

  constructor() {
    this.#bridgeGame = null;
    this.#totalAttempts = 0;
  }

  play() {
    OutputView.startGame();
    InputView.readBridgeSize((bridgeLength) => {
      this.#bridgeGame = new BridgeGame(bridgeLength);
      this.#move();
    });
  }

  #move() {
    InputView.readMoving((moving) => {
      const isAlive = this.#bridgeGame.move(moving);
    });
  }

  #retryOrExit() {
    InputView.readGameCommand((command) => {
      if (command === COMMAND.EXIT) {
        OutputView.printResult(this.#totalAttempts);
      } else if (command === COMMAND.RETRY) {
        this.#bridgeGame.retry();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
