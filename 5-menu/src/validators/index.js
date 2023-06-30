const InvalidInputException = require('@woowacourse/mission-utils');
const { ERRORS } = require('../constants');

const validateEnterCoachs = (coachs) => {
  if (coachs.length < 2 || coachs.length > 5)
    throw new InvalidInputException(ERRORS.WRONG_COACHS_RANGE);
  coachs.forEach((coach) => {
    if (coach.length < 2 || coach.length > 5)
      throw new InvalidInputException(ERRORS.WRONNG_COACH_NAME_LENGTH);
  });
};

const validateExcludeMenu = (excludeMenu) => {
  if (excludeMenu.length > 2 || excludeMenu.length < 0)
    throw new InvalidInputException(ERRORS.WRONG_EXCLUDE_MENU_RANGE);
};

module.exports = {
  validateEnterCoachs,
  validateExcludeMenu,
};
