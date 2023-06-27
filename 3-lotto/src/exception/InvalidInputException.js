const Exception = require('./Exception');

class InvalidInputException extends Exception {
  constructor(message) {
    super(message);
    this.name = 'InvalidInputException';
  }
}

module.exports = InvalidInputException;
