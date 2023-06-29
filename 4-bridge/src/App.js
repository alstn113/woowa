const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeGame = require('./domains/BridgeGame');
const { COMMAND } = require('./constants');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = null;
  }

  play() {
    OutputView.startGame();
    InputView.readBridgeSize((bridgeLength) => {
      this.#bridgeGame = new BridgeGame(bridgeLength);
      this.#progress();
    });
  }

  #progress() {
    BridgeGame.totalAttempts += 1;
    this.#playRound();
  }

  #playRound() {
    InputView.readMoving((moving) => {
      const { isAlive, history, isGameClear } = this.#bridgeGame.move(moving);
      OutputView.printMap(isAlive, history);

      if (isGameClear) return this.#handleGameClear(history);
      if (!isAlive) this.#retryOrExit(history);
      this.#playRound();
    });
  }

  #retryOrExit(history) {
    InputView.readGameCommand((command) => {
      switch (command) {
        case COMMAND.EXIT:
          OutputView.printResult(false, history, BridgeGame.totalAttempts);
          InputView.close();
          break;
        case COMMAND.RETRY:
          this.#bridgeGame.retry();
          this.#progress();
          break;
        default:
          break;
      }
    });
  }

  #handleGameClear(history) {
    OutputView.printResult(true, history, BridgeGame.totalAttempts);
    InputView.close();
  }
}

const app = new App();
app.play();

module.exports = App;
