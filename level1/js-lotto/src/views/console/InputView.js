import { MESSAGES } from '../../constants.js';
import Console from '../../utils/Console.js';
import InvalidInputException from '../../exceptions/InvalidInputException.js';
import { validateCarNames, validateTryCount } from '../validators/index.js';

const InputView = {
  read: async (query, callback) => {
    try {
      const input = await Console.readLine(query);
      return callback(input);
    } catch (e) {
      if (e instanceof InvalidInputException) {
        Console.print(e.message);
        return InputView.read(query, callback);
      }
      throw e;
    }
  },

  // readCarNames: async () => {
  //   const carNames = await InputView.read(MESSAGES.ENTER_CAR_NAMES, (input) => {
  //     input = input.split(',');
  //     validateCarNames(input);
  //     return input;
  //   });

  //   return carNames;
  // },

  close: () => {
    Console.close();
  },
};

export default InputView;
