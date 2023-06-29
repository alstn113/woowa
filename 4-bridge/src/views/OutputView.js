const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, POSITIONS } = require('../constants');

const OutputView = {
  startGame() {
    Console.print(MESSAGES.START_GAME);
  },

  printMap(isAlive, history) {
    const covertHistoryToString = (history, isAlive, positionToCheck) => {
      return `[${history
        .map((moving, idx) => {
          if (moving !== positionToCheck) return '   ';
          if (idx === history.length - 1 && !isAlive) return ' X ';
          return ' O ';
        })
        .join('|')}]`;
    };

    Console.print(covertHistoryToString(history, isAlive, POSITIONS.UP));
    Console.print(covertHistoryToString(history, isAlive, POSITIONS.DOWN));
  },

  printResult(isAlive, history, totalAttempts) {
    Console.print(MESSAGES.BRIDGE_RESULT);
    this.printMap(isAlive, history);
    Console.print('');
    Console.print(
      `${MESSAGES.GAME_RESULT}: ${isAlive ? MESSAGES.SUCCESS : MESSAGES.FAIL}`,
    );
    Console.print(`${MESSAGES.TOTAL_ATTEMPTS}: ${totalAttempts}`);
  },
};

module.exports = OutputView;
