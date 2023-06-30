class AppException extends Error {
  static PREFIX = '[ERROR]';

  constructor(message) {
    super(`${AppException.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = AppException;
