const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, COMMAND, POSITIONS, BRIDGE } = require('../constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGES.ENTER_BRIDGE_LENGTH, (bridgeLength) => {
      if (isNaN(bridgeLength)) throw new Error('숫자를 입력해주세요.');
      bridgeLength = Number(bridgeLength);
      if (bridgeLength < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH > 20)
        throw new Error('다리의 길이는 3 이상 20 이하의 숫자만 가능합니다.');
      callback(bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGES.ENTER_MOVING, (moving) => {
      if (!Object.values(POSITIONS).includes(moving))
        throw new Error('잘못된 입력입니다.');
      callback(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGES.SELECT_RETRY_OR_EXIT, (command) => {
      if (!Object.values(COMMAND).includes(command))
        throw new Error('잘못된 입력입니다.');
      callback(command);
    });
  },
};

module.exports = InputView;
