class InvalidInputException extends AppException {
  constructor(message) {
    super(message);
  }
}

module.exports = InvalidInputException;
