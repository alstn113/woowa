import { MESSAGES } from '../../constants.js';
import Console from '../../utils/Console.js';
import InvalidInputException from '../../exceptions/InvalidInputException.js';
import {
  validatePurchaseAmount,
  validateLottoNumbers,
  validateBonusNumber,
} from '../../validators/index.js';

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

  readPurchaseAmount: async () => {
    const purchaseAmount = await InputView.read(
      MESSAGES.ENTER_PURCHASE_AMOUNT,
      (input) => {
        const amount = Number(input);
        validatePurchaseAmount(amount);
        return amount;
      },
    );

    return purchaseAmount;
  },

  readWinningNumbers: async () => {
    const winningNumbers = await InputView.read(
      MESSAGES.ENTER_WINNING_NUMBERS,
      (input) => {
        const numbers = input.split(',').map((number) => Number(number));
        validateLottoNumbers(numbers);
        return numbers;
      },
    );

    return winningNumbers;
  },

  readBonusNumber: async () => {
    const bonusNumber = await InputView.read(
      MESSAGES.ENTER_BONUS_NUMBER,
      (input) => {
        const number = Number(input);
        validateBonusNumber(number);
        return number;
      },
    );

    return bonusNumber;
  },

  close: () => {
    Console.close();
  },
};

export default InputView;
