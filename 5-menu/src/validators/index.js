const InvalidInputException = require('../exceptions/InValidInputException');
const { ERRORS } = require('../constants');

const validateEnterCoachs = (coachs) => {
  if (coachs.length < 2 || coachs.length > 5)
    throw new InvalidInputException(ERRORS.WRONG_COACHS_RANGE);
  coachs.forEach((coach) => {
    if (coach.length < 2 || coach.length > 5)
      throw new InvalidInputException(ERRORS.WRONNG_COACH_NAME_LENGTH);
    if (new Set(coach).size !== coach.length)
      throw new InvalidInputException(ERRORS.DUPLICATED_COACH_NAME);
  });
};

const validateExcludeMenus = (excludeMenus) => {
  if (excludeMenus.length > 2 || excludeMenus.length < 0)
    throw new InvalidInputException(ERRORS.WRONG_EXCLUDE_MENU_RANGE);
  if (new Set(excludeMenus).size !== excludeMenus.length)
    throw new InvalidInputException(ERRORS.DUPLICATED_EXCLUDE_MENU);
};

module.exports = {
  validateEnterCoachs,
  validateExcludeMenus,
};
