const Exception = require('./Exception');

class LottoException extends Exception {
  constructor(message) {
    super(message);
    this.name = 'LottoException';
  }
}

module.exports = LottoException;
