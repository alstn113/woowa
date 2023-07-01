import { ERRORS } from '../constants.js';
import InvalidInputException from '../exceptions/InvalidInputException.js';

export const validateCarNames = (carNames) => {
  if (!carNames.every((carName) => carName.length <= 5))
    throw new InvalidInputException(ERRORS.INVALID_CAR_NAME_LENGTH);
  if (!carNames.every((carName) => carName.length > 0))
    throw new InvalidInputException(ERRORS.CAR_NAMES_EMPTY);
  if (new Set(carNames).size !== carNames.length)
    throw new InvalidInputException(ERRORS.CAR_NAME_DUPLICATE);
};

export const validateTryCount = (tryCount) => {
  if (isNaN(tryCount))
    throw new InvalidInputException(ERRORS.INVALID_TRY_COUNT_TYPE);
  if (tryCount < 1)
    throw new InvalidInputException(ERRORS.INVALID_TRY_COUNT_RANGE);
};
