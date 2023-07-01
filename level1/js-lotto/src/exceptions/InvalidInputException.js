import AppException from "./AppException";

class InvalidInputException extends AppException {
  constructor(message) {
    super(message);
  }
}

export default InvalidInputException;
