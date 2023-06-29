const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, POSITIONS } = require('../constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  startGame() {
    Console.print(MESSAGES.START_GAME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(isAlive, history) {
    Console.print(
      `[${history
        .map((moving, idx) => {
          if (moving === POSITIONS.DOWN) return '   ';
          if (idx === history.length - 1 && !isAlive) return ' X ';
          return ' O ';
        })
        .join('|')}]`,
    );
    Console.print(
      `[${history
        .map((moving, idx) => {
          if (moving === POSITIONS.UP) return '   ';
          if (idx === history.length - 1 && !isAlive) return ' X ';
          return ' O ';
        })
        .join('|')}]`,
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(isAlive, history, totalAttempts) {
    Console.print(MESSAGES.BRIDGE_RESULT);
    this.printMap(isAlive, history);
    Console.print(
      `${MESSAGES.GAME_RESULT}: ${isAlive ? MESSAGES.SUCCESS : MESSAGES.FAIL}`,
    );
    Console.print(`${MESSAGES.TOTAL_ATTEMPTS}: ${totalAttempts}`);
    Console.close();
  },
};

module.exports = OutputView;
