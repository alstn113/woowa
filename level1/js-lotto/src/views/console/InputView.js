import { MESSAGES } from '../../constants.js';
import Console from '../../utils/Console.js';

const InputView = {
  read: async (message, callback) => Console.readLine(message, callback),

  readPurchaseAmount: async () => {
    const purchaseAmount = await InputView.read(MESSAGES.ENTER_PURCHASE_AMOUNT);
    return Number(purchaseAmount);
  },

  readWinningNumbers: async () => {
    const winningNumbers = await InputView.read(MESSAGES.ENTER_WINNING_NUMBERS);
    return winningNumbers.split(',').map((number) => Number(number));
  },

  readBonusNumber: async () => {
    const bonusNumber = await InputView.read(MESSAGES.ENTER_BONUS_NUMBER);
    return Number(bonusNumber);
  },

  close: () => {
    Console.close();
  },
};

export default InputView;
