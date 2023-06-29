const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');

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
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult() {
    Console.print(MESSAGES.BRIDGE_RESULT);
  },
};

module.exports = OutputView;
