const { Console } = require('@woowacourse/mission-utils');
const {
  MESSAGES,
  ERROR_MESSAGES,
  GAME_OPTIONS,
} = require('./constants/Messages');
const Computer = require('./Computer');
const GameManager = require('./GameManager');

class App {
  #computer;
  #gameManager;

  constructor() {
    this.#computer = new Computer();
    this.#gameManager = new GameManager();
  }

  #processGame() {
    Console.readLine(MESSAGES.ENTER_NUMBERS, (input) => {
      const numbers = input.split('').map((number) => parseInt(number));
      this.#gameManager.verifyNumbers(numbers);
      const { strike, ball } = this.#computer.checkNumbers(numbers);

      this.#printResult(strike, ball);

      if (strike === 3) {
        this.#replayOrExit();
      } else {
        this.#processGame();
      }
    });
  }

  #printResult(strike, ball) {
    const resultMessage = this.#gameManager.getResultMessage(strike, ball);
    Console.print(resultMessage);
  }

  #exitGame() {
    Console.print(MESSAGES.EXIT_GAME);
    Console.close();
  }

  #replayOrExit() {
    Console.readLine(MESSAGES.START_OR_EXIT, (select) => {
      if (select === GAME_OPTIONS.RESTART) {
        this.#computer.startGame();
        this.#processGame();
      } else if (select === GAME_OPTIONS.EXIT) {
        this.#exitGame();
      } else {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
      }
    });
  }

  play() {
    Console.print(MESSAGES.GAME_START);
    this.#processGame();
  }
}

const app = new App();
app.play();

module.exports = App;
