const Computer = require('../src/Computer');

describe('Computer', () => {
  let computer;

  beforeEach(() => {
    computer = new Computer();
  });

  it('should generate random numbers on game start', () => {
    expect(computer.answerNumbers.length).toBe(3);
  });

  it('should reset numbers on game restart', () => {
    computer.startGame();
    expect(computer.answerNumbers.length).toBe(3);
  });

  it('should check the numbers and return strike and ball count', () => {
    const computer = new Computer();
    computer.answerNumbers = [1, 2, 3]; // Set specific answer numbers for testing

    let result = computer.checkNumbers([1, 2, 3]);
    expect(result.strike).toBe(3);
    expect(result.ball).toBe(0);

    result = computer.checkNumbers([2, 1, 4]);
    expect(result.strike).toBe(0);
    expect(result.ball).toBe(2);

    result = computer.checkNumbers([1, 2, 5]);
    expect(result.strike).toBe(2);
    expect(result.ball).toBe(0);

    result = computer.checkNumbers([4, 5, 6]);
    expect(result.strike).toBe(0);
    expect(result.ball).toBe(0);
  });
});
