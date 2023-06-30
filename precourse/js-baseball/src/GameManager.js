const { ERROR_MESSAGES, MESSAGES } = require('./constants/Messages');

class GameManager {
  constructor() {}

  getResultMessage(strike, ball) {
    if (strike === 0 && ball === 0) return MESSAGES.GUESS.NOTHING;

    const ballMessage = ball > 0 ? MESSAGES.GUESS.BALL(ball) : '';
    const strikeMessage = strike > 0 ? MESSAGES.GUESS.STRIKE(strike) : '';
    const separator = ball > 0 && strike > 0 ? ' ' : '';

    return `${ballMessage}${separator}${strikeMessage}`;
  }

  verifyNumbers(numbers) {
    const isDuplicated = numbers.some((number, index) => {
      return numbers.indexOf(number) !== index;
    });
    const isInvalidLength = numbers.length !== 3;

    if (isDuplicated) throw new Error(ERROR_MESSAGES.DUPLICATED);
    if (isInvalidLength) throw new Error(ERROR_MESSAGES.INVALID_LENGTH);

    return true;
  }
}

module.exports = GameManager;
