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
      const { isAlive, history, isGameClear } = this.#bridgeGame.move(moving);
      OutputView.printMap(isAlive, history);

      if (isGameClear) {
        OutputView.printResult(isAlive, history, this.#totalAttempts);
      }

      if (isAlive) this.#move();

      this.#totalAttempts += 1;
      this.#retryOrExit();
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
