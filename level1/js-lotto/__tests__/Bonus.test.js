import Bonus from '../src/domains/Bonus';
import Lotto from '../src/domains/Lotto';

describe('Bonus', () => {
  test('보너스 번호 생성 테스트', () => {
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const number = 7;
    const bonus = new Bonus(winningNumbers, number);

    expect(bonus.getNumber()).toEqual(number);
  });

  describe('보너스 번호 유효성 검사', () => {
    test('보너스 번호가 1보다 작을 경우', () => {
      const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
      const number = 0;
      expect(() => new Bonus(winningNumbers, number)).toThrow();
    });

    test('보너스 번호가 45보다 클 경우', () => {
      const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
      const number = 46;
      expect(() => new Bonus(winningNumbers, number)).toThrow();
    });

    test('보너스 번호가 숫자가 아닐 경우', () => {
      const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
      const number = 'a';
      expect(() => new Bonus(winningNumbers, number)).toThrow();
    });

    test('보너스 번호가 당첨 번호와 중복일 경우', () => {
      const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
      const number = 6;
      expect(() => new Bonus(winningNumbers, number)).toThrow();
    });
  });
});
