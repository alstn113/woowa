const { Console } = require('@woowacourse/mission-utils');
const InvalidInputException = require('../exceptions/InValidInputException');
const { MESSAGES } = require('../constants');

class InputView {
  #read(query, callback) {
    Console.readLine(query, (input) => {
      try {
        callback(input);
      } catch (e) {
        if (e instanceof InvalidInputException) {
          Console.print(e.message);
          this.#read(query, callback);
          return;
        }
        throw e;
      }
    });
  }

  readCoachsNames(callback) {
    this.#read(MESSAGES.ENTER_COACHS_NAMES, callback);
  }

  readExcludeMenu(coach, callback) {
    this.#read(MESSAGES.ENTER_EXCLUDE_MENU(coach), callback);
  }
}

module.exports = InputView;
