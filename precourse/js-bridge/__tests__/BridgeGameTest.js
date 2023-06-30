const BridgeGame = require('../src/domains/BridgeGame');

describe('BridgeGame', () => {
  describe('move', () => {
    test('should return the correct result when moving is correct', () => {
      const randomNumbers = [1, 0, 0]; // ["U", "D", "D"]
      const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const game = new BridgeGame(3, mockGenerator);

      const result1 = game.move('U');
      expect(result1).toEqual({
        isAlive: true,
        history: ['U'],
        isGameClear: false,
      });

      const result2 = game.move('D');
      expect(result2).toEqual({
        isAlive: true,
        history: ['U', 'D'],
        isGameClear: false,
      });

      const result3 = game.move('D');
      expect(result3).toEqual({
        isAlive: true,
        history: ['U', 'D', 'D'],
        isGameClear: true,
      });
    });

    test('should return the correct result when moving is incorrect', () => {
      const randomNumbers = [1, 0, 0]; // ["U", "D", "D"]
      const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const game = new BridgeGame(3, mockGenerator);

      const result1 = game.move('U');
      expect(result1).toEqual({
        isAlive: true,
        history: ['U'],
        isGameClear: false,
      });

      const result2 = game.move('U');
      expect(result2).toEqual({
        isAlive: false,
        history: ['U', 'U'],
        isGameClear: false,
      });
    });

    test('should return the correct result when moving is incorrect', () => {
      const randomNumbers = [1, 0, 0]; // ["U", "D", "D"]
      const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const game = new BridgeGame(3, mockGenerator);

      const result1 = game.move('U');
      expect(result1).toEqual({
        isAlive: true,
        history: ['U'],
        isGameClear: false,
      });

      const result2 = game.move('U');
      expect(result2).toEqual({
        isAlive: false,
        history: ['U', 'U'],
        isGameClear: false,
      });
    });
  });

  test('retry test', () => {
    const randomNumbers = [1, 0, 0]; // ["U", "D", "D"]
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const game = new BridgeGame(3, mockGenerator);

    const result1 = game.move('D');
    expect(result1).toEqual({
      isAlive: false,
      history: ['D'],
      isGameClear: false,
    });

    game.retry();

    expect(game.getHistory()).toEqual([]);
    expect(game.getBridge()).toEqual(['U', 'D', 'D']);
  });
});
