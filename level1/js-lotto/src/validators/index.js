import { ERRORS, LOTTO } from '../constants';
import InvalidInputException from '../exceptions/InvalidInputException';

export const validatePurchaseAmount = (price) => {
  if (typeof price !== 'number' || isNaN(price))
    throw new InvalidInputException(ERRORS.PURCHASE_AMOUNT.WRONG_TYPE);
  if (price % LOTTO.PRICE !== 0 || price < LOTTO.PRICE)
    throw new InvalidInputException(
      ERRORS.PURCHASE_AMOUNT.NOT_MULTIPLE_OF_LOTTO_PRICE,
    );
};

export const validateLottoNumbers = (numbers) => {
  if (numbers.length !== LOTTO.COUNT)
    throw new InvalidInputException(ERRORS.LOTTO.WRONG_LENGTH);
  if (!numbers.every((number) => typeof number === 'number'))
    throw new InvalidInputException(ERRORS.LOTTO.WRONG_TYPE);
  if (
    !numbers.every(
      (number) => LOTTO.MIN_NUMBER <= number && number <= LOTTO.MAX_NUMBER,
    )
  )
    throw new InvalidInputException(ERRORS.LOTTO.OUT_OF_RANGE);
  if (new Set(numbers).size !== numbers.length)
    throw new InvalidInputException(ERRORS.LOTTO.DUPLICATED);
};

export const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (typeof bonusNumber !== 'number' || isNaN(bonusNumber))
    throw new InvalidInputException(ERRORS.BONUS.WRONG_TYPE);
  if (!(LOTTO.MIN_NUMBER <= bonusNumber && bonusNumber <= LOTTO.MAX_NUMBER))
    throw new InvalidInputException(ERRORS.BONUS.OUT_OF_RANGE);
  if (winningNumbers.getNumbers().includes(bonusNumber))
    throw new InvalidInputException(ERRORS.BONUS.DUPLICATED);
};
