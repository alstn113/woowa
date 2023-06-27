const GameManager = require('../src/GameManager');
const { MESSAGES } = require('../src/constants');

describe('GameManager', () => {
  let gameManager;

  beforeEach(() => {
    gameManager = new GameManager();
  });

  it('should return correct result messages', () => {
    // Test case 1: No strike, no ball
    expect(gameManager.getResultMessage(0, 0)).toBe(MESSAGES.GUESS.NOTHING);

    // Test case 2: Only ball
    expect(gameManager.getResultMessage(0, 2)).toBe(MESSAGES.GUESS.BALL(2));

    // Test case 3: Only strike
    expect(gameManager.getResultMessage(3, 0)).toBe(MESSAGES.GUESS.STRIKE(3));

    // Test case 4: Both ball and strike
    expect(gameManager.getResultMessage(2, 1)).toBe(
      `${MESSAGES.GUESS.BALL(1)} ${MESSAGES.GUESS.STRIKE(2)}`,
    );
  });

  it('should return true if input is valid', () => {
    // Test case 1: Valid input
    expect(gameManager.isValidNumbers('123')).toBeTruthy();

    // Test case 2: Invalid input (duplicated)
    expect(gameManager.isValidNumbers('112')).toBeFalsy();

    // Test case 3: Invalid input (length)
    expect(gameManager.isValidNumbers('1234')).toBeFalsy();
  });
});
