const { LOTTO_OPTIONS } = require('../constants/constants');
const InvalidInputException = require('../exceptions/InvalidInputException');
const { ERROR_MESSAGES } = require('../constants/constants');

const validateLottoCount = (numbers) => {
  if (numbers.length !== 6) {
    throw new LottoException(ERROR_MESSAGES.LOTTO_WRONG_LENGTH);
  }
};

const validateDuplicateLotto = (numbers) => {
  const set = new Set(numbers);
  if (set.size !== numbers.length) {
    throw new LottoException(ERROR_MESSAGES.LOTTO_DUPLICATED_NUMBER);
  }
};

const validateLottoRange = (numbers) => {
  if (
    !numbers.every(
      (number) =>
        LOTTO_OPTIONS.LOTTO_MIN_NUMBER <= number &&
        number <= LOTTO_OPTIONS.LOTTO_MAX_NUMBER,
    )
  )
    throw new LottoException(ERROR_MESSAGES.LOTTO_OUT_OF_RANGE);
};

const validateLottoType = (numbers) => {
  if (!numbers.every((number) => typeof number === 'number' && !isNaN(number)))
    throw new LottoException(ERROR_MESSAGES.LOTTO_WRONG_TYPE);
};

const validateNumbersType = (numbers) => {
  if (!numbers.every((number) => typeof number === 'number' && !isNaN(number)))
    throw new InvalidInputException(ERROR_MESSAGES.LOTTO_WRONG_TYPE);
};

const validateBonusType = (number) => {
  if (typeof number !== 'number' || isNaN(number))
    throw new LottoException(ERROR_MESSAGES.BONUS_WRONG_TYPE);
};

const validateBonusRange = (number) => {
  if (
    !(
      LOTTO_OPTIONS.LOTTO_MIN_NUMBER <= number &&
      number <= LOTTO_OPTIONS.LOTTO_MAX_NUMBER
    )
  )
    throw new LottoException(ERROR_MESSAGES.BONUS_OUT_OF_RANGE);
};

const validateBonusDuplicate = (winningNumbers, bonusNumber) => {
  if (winningNumbers.includes(bonusNumber))
    throw new LottoException(ERROR_MESSAGES.BONUS_DUPLICATED_NUMBER);
};

const validatePrice = (price) => {
  if (typeof price !== 'number' || isNaN(price))
    throw new InvalidInputException(ERROR_MESSAGES.INPUT_IS_NOT_NUMBER);
  if (price < 0) throw new InvalidInputException(ERROR_MESSAGES.LEAST_PRICE);
  if (price % LOTTO_OPTIONS.LOTTO_PRICE !== 0)
    throw new InvalidInputException(ERROR_MESSAGES.NOT_MULTIPLE_OF_1000);
};

module.exports = {
  validateLottoCount,
  validateDuplicateLotto,
  validateLottoRange,
  validateLottoType,
  validateBonusType,
  validateBonusRange,
  validateBonusDuplicate,
  validatePrice,
  validateNumbersType,
};
