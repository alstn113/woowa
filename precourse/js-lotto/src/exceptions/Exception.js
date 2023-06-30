class Exception extends Error {
  static prefix = '[ERROR]';

  constructor(message) {
    super(`${Exception.prefix} ${message}`);
  }
}

module.exports = Exception;
