const GameManager = require('../src/GameManager');
const { ERROR_MESSAGES, MESSAGES } = require('../src/constants/Messages');

describe('GameManager', () => {
  let gameManager;

  beforeEach(() => {
    gameManager = new GameManager();
  });

  describe('getResultMessage', () => {
    it('should return "낫싱" when strike and ball counts are 0', () => {
      const result = gameManager.getResultMessage(0, 0);
      expect(result).toBe(MESSAGES.GUESS.NOTHING);
    });

    it('should return the correct message for given strike and ball counts', () => {
      const result1 = gameManager.getResultMessage(2, 1);
      expect(result1).toBe(
        `${MESSAGES.GUESS.BALL(1)} ${MESSAGES.GUESS.STRIKE(2)}`,
      );

      const result2 = gameManager.getResultMessage(0, 3);
      expect(result2).toBe(`${MESSAGES.GUESS.BALL(3)}`);

      const result3 = gameManager.getResultMessage(1, 0);
      expect(result3).toBe(`${MESSAGES.GUESS.STRIKE(1)}`);
    });
  });

  describe('verifyNumbers', () => {
    it('should return true for valid numbers', () => {
      const numbers = [1, 2, 3];
      const result = gameManager.verifyNumbers(numbers);
      expect(result).toBe(true);
    });

    it('should throw an error for duplicated numbers', () => {
      const numbers = [1, 2, 2];
      expect(() => {
        gameManager.verifyNumbers(numbers);
      }).toThrow(Error(ERROR_MESSAGES.DUPLICATED));
    });

    it('should throw an error for invalid length', () => {
      const numbers = [1, 2];
      expect(() => {
        gameManager.verifyNumbers(numbers);
      }).toThrow(Error(ERROR_MESSAGES.INVALID_LENGTH));
    });
  });
});
