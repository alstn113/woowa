import { MESSAGES } from '../constants.js';
import Console from '../utils/Console.js';

class InputView {
  async #read(query, callback) {
    try {
      const input = await Console.readLine(query);
      return input;
    } catch {
      if (e instanceof InvalidInputException) {
        Console.print(e.message);
        this.#read(query, callback);
        return;
      }
      throw e;
    }
  }

  async readCarNames() {
    const carNames = await this.#read(MESSAGES.ENTER_CAR_NAMES);
    return carNames;
  }

  async readTryCount() {
    const input = await this.#read(MESSAGES.ENTER_TRY_COUNT);
    return input;
  }
}

export default InputView;
