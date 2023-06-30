const { Console } = require('@woowacourse/mission-utils');
const InvalidInputException = require('../exceptions/InValidInputException');
const { MESSAGES } = require('../constants');
const { validateEnterCoachs, validateExcludeMenus } = require('../validators');

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
      validateEnterCoachs(coachs);
      callback(coachs);
    });
  }

  readExcludeMenus(coach, callback) {
    this.#read(MESSAGES.ENTER_EXCLUDE_MENU(coach), (input) => {
      const excludeMenus = this.parseStringToArray(input);
      validateExcludeMenus(excludeMenus);
      callback(excludeMenus);
    });
  }

  parseStringToArray(str) {
    return str.split(',').map((v) => v.trim());
  }

  close() {
    Console.close();
  }
}

module.exports = InputView;
