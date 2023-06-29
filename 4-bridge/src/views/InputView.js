const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');
const InvalidInputException = require('../exceptions/InvalidInputException');
const {
  validateBridgeLength,
  validateMoving,
  validateGameCommand,
} = require('../validators');

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

  readBridgeSize(callback) {
    this.read(MESSAGES.ENTER_BRIDGE_LENGTH, (bridgeLength) => {
      validateBridgeLength(bridgeLength);
      callback(bridgeLength);
    });
  },

  readMoving(callback) {
    this.read(MESSAGES.ENTER_MOVING, (moving) => {
      validateMoving(moving);
      callback(moving);
    });
  },

  readGameCommand(callback) {
    this.read(MESSAGES.SELECT_RETRY_OR_EXIT, (command) => {
      validateGameCommand(command);
      callback(command);
    });
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
