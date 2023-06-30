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

  readCoachs(callback) {
    this.#read(MESSAGES.ENTER_COACHS, (input) => {
      const coachs = this.parseStringToArray(input);
      callback(coachs);
    });
  }

  readExcludeMenu(coach, callback) {
    this.#read(MESSAGES.ENTER_EXCLUDE_MENU(coach), (input) => {
      const excludeMenu = this.parseStringToArray(input);
      callback(excludeMenu);
    });
  }

  parseStringToArray(input) {
    return input.split(',').map((coach) => coach.trim());
  }
}

module.exports = InputView;
