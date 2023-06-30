const Bonus = require('../src/domains/Bonus');

describe('Bonus', () => {
  describe('constructor', () => {
    it('유효한 보너스 번호로 Bonus 인스턴스를 생성해야 합니다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const bonus = new Bonus(winningNumbers, bonusNumber);
      expect(bonus.bonusNumber).toBe(bonusNumber);
    });

    it('숫자가 아닌 보너스 번호로 에러를 발생시켜야 합니다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = '7';
      expect(() => new Bonus(winningNumbers, bonusNumber)).toThrow();
    });

    it('범위를 벗어난 보너스 번호로 에러를 발생시켜야 합니다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 50;
      expect(() => new Bonus(winningNumbers, bonusNumber)).toThrow();
    });

    it('당첨 번호와 중복된 보너스 번호로 에러를 발생시켜야 합니다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 6;
      expect(() => new Bonus(winningNumbers, bonusNumber)).toThrow();
    });
  });
});
