const { ERRORS, COMMAND, POSITIONS, BRIDGE } = require('../constants');
const InvalidInputException = require('../exceptions/InvalidInputException');

const validateBridgeLength = (bridgeLength) => {
  if (isNaN(bridgeLength))
    throw new InvalidInputException(ERRORS.BRIDGE_INPUT_NOT_NUMBER);
  bridgeLength = Number(bridgeLength);
  if (bridgeLength < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH < bridgeLength)
    throw new InvalidInputException(ERRORS.BRIDGE_LENGTH_RANGE);
};

const validateMoving = (moving) => {
  if (!Object.values(POSITIONS).includes(moving))
    throw new InvalidInputException(ERRORS.WRONG_MOVING);
};

const validateGameCommand = (command) => {
  if (!Object.values(COMMAND).includes(command))
    throw new InvalidInputException(ERRORS.WRONG_COMMAND);
};

module.exports = {
  validateBridgeLength,
  validateMoving,
  validateGameCommand,
};
