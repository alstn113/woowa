import { COMMAND, ERRORS, LOTTO } from '../constants';
import InvalidInputException from '../exceptions/InvalidInputException';

export const validatePurchaseAmount = (price) => {
  if (!isNumber(price))
    throw new InvalidInputException(ERRORS.PURCHASE_AMOUNT.WRONG_TYPE);
  if (isNotMultipleOf(price, LOTTO.PRICE))
    throw new InvalidInputException(
      ERRORS.PURCHASE_AMOUNT.NOT_MULTIPLE_OF_LOTTO_PRICE,
    );
};

export const validateLottoNumbers = (numbers) => {
  if (!isSameLength(numbers, LOTTO.COUNT))
    throw new InvalidInputException(ERRORS.LOTTO.WRONG_LENGTH);
  if (!isAllNumber(numbers))
    throw new InvalidInputException(ERRORS.LOTTO.WRONG_TYPE);
  if (!isAllInRange(numbers, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))
    throw new InvalidInputException(ERRORS.LOTTO.OUT_OF_RANGE);
  if (!isAllUnique(numbers))
    throw new InvalidInputException(ERRORS.LOTTO.DUPLICATED);
};

export const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (!isNumber(bonusNumber))
    throw new InvalidInputException(ERRORS.BONUS.WRONG_TYPE);
  if (!isInRange(bonusNumber, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))
    throw new InvalidInputException(ERRORS.BONUS.OUT_OF_RANGE);
  if (winningNumbers.getNumbers().includes(bonusNumber))
    throw new InvalidInputException(ERRORS.BONUS.DUPLICATED);
};

export const validateCommand = (answer) => {
  if (!Object.values(COMMAND).includes(answer))
    throw new InvalidInputException(ERRORS.COMMAND.INVALID_INPUT);
};

const isNumber = (value) => typeof value === 'number' && !isNaN(value);
const isInRange = (value, min, max) => min <= value && value <= max;
const isSameLength = (value, length) => value.length === length;
const isAllInRange = (values, min, max) =>
  values.every((value) => isInRange(value, min, max));
const isAllUnique = (values) => new Set(values).size === values.length;
const isAllNumber = (values) => values.every((value) => isNumber(value));
const isNotMultipleOf = (a, b) => a % b !== 0 || a < b;
