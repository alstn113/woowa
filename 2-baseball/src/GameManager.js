const { MESSAGES } = require('./constants');

class GameManager {
  constructor() {}

  getResultMessage(strike, ball) {
    if (strike === 0 && ball === 0) return MESSAGES.GUESS.NOTHING;

    const ballMessage = ball > 0 ? MESSAGES.GUESS.BALL(ball) : '';
    const strikeMessage = strike > 0 ? MESSAGES.GUESS.STRIKE(strike) : '';
    const separator = ball > 0 && strike > 0 ? ' ' : '';

    return `${ballMessage}${separator}${strikeMessage}`;
  }

  isValidNumbers(input) {
    const numbers = input.split('').map((number) => parseInt(number));
    const isDuplicated = numbers.some((number, index) => {
      return numbers.indexOf(number) !== index;
    });
    const isInvalidLength = numbers.length !== 3;

    return !isDuplicated && !isInvalidLength;
  }
}

module.exports = GameManager;
