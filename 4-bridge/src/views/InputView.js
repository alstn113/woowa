const { Console } = require('@woowacourse/mission-utils');
const {
  MESSAGES,
  ERRORS,
  COMMAND,
  POSITIONS,
  BRIDGE,
} = require('../constants');
const InvalidInputException = require('../exceptions/InvalidInputException');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  read(query, callback) {
    Console.readLine(query, (value) => {
      try {
        callback(value);
      } catch (e) {
        if (e instanceof InvalidInputException) {
          Console.print(e.message);
          this.read(query, callback);
          return;
        }
        throw e;
      }
    });
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.read(MESSAGES.ENTER_BRIDGE_LENGTH, (bridgeLength) => {
      if (isNaN(bridgeLength))
        throw new InvalidInputException(ERRORS.BRIDGE_INPUT_NOT_NUMBER);
      bridgeLength = Number(bridgeLength);
      if (
        bridgeLength < BRIDGE.MIN_LENGTH ||
        BRIDGE.MAX_LENGTH < bridgeLength
      ) {
        throw new InvalidInputException(ERRORS.BRIDGE_LENGTH_RANGE);
      }
      callback(bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.read(MESSAGES.ENTER_MOVING, (moving) => {
      if (!Object.values(POSITIONS).includes(moving))
        throw new InvalidInputException(ERRORS.WRONG_MOVING);
      callback(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.read(MESSAGES.SELECT_RETRY_OR_EXIT, (command) => {
      if (!Object.values(COMMAND).includes(command))
        throw new InvalidInputException(ERRORS.WRONG_COMMAND);
      callback(command);
    });
  },
};

module.exports = InputView;
