import { MESSAGES } from '../constants.js';
import Console from '../utils/Console.js';
import InvalidInputException from '../exceptions/InvalidInputException.js';
import { validateCarNames, validateTryCount } from '../validators/index.js';

class InputView {
  async #read(query, callback) {
    try {
      const input = await Console.readLine(query);
      return callback(input);
    } catch (e) {
      if (e instanceof InvalidInputException) {
        Console.print(e.message);
        return this.#read(query, callback);
      }
      throw e;
    }
  }

  async readCarNames() {
    const carNames = await this.#read(MESSAGES.ENTER_CAR_NAMES, (input) => {
      input = input.split(',');
      validateCarNames(input);
      return input;
    });

    return carNames;
  }

  async readTryCount() {
    const tryCount = await this.#read(MESSAGES.ENTER_TRY_COUNT, (input) => {
      input = Number(input);
      validateTryCount(input);
      return input;
    });

    return tryCount;
  }

  close() {
    Console.close();
  }
}

export default InputView;
