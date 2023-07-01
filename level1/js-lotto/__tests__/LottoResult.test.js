import Lotto from '../src/domains/Lotto';
import Bonus from '../src/domains/Bonus';
import LottoResult from '../src/domains/LottoResult';

describe('LottoResult', () => {
  const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
  const bonusNumber = new Bonus(winningNumbers, 7);

  describe('로또 매칭 테스트', () => {
    test('로또 숫자 6개 모두 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([0, 0, 0, 0, 1]);
    });

    test('로또 숫자 5개 + 보너스 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 7])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([0, 0, 0, 1, 0]);
    });

    test('로또 숫자 5개 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 8])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([0, 0, 1, 0, 0]);
    });

    test('로또 숫자 4개 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 9, 10])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([0, 1, 0, 0, 0]);
    });

    test('로또 숫자 3개 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 11, 12, 13])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([1, 0, 0, 0, 0]);
    });

    test('로또 숫자 2개보다 적게 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 14, 15, 16, 17])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      expect(lottoResult.getMatches()).toEqual([0, 0, 0, 0, 0]);
    });
  });

  describe('로또 수익률 테스트', () => {
    test('로또 숫자 6개 모두 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('200,000,000.0');
    });

    test('로또 숫자 5개 + 보너스 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 7])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('3,000,000.0');
    });

    test('로또 숫자 5개 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 8])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('150,000.0');
    });

    test('로또 숫자 4개 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 3, 4, 9, 10])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('5,000.0');
    });

    test('로또 숫자 3개 맞췄을 경우', () => {
      const lottos = [
        new Lotto([1, 2, 3, 11, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
        new Lotto([16, 26, 36, 17, 12, 13]),
      ];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('62.5');
    });

    test('로또 숫자 2개보다 적게 맞췄을 경우', () => {
      const lottos = [new Lotto([1, 2, 14, 15, 16, 17])];
      const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
      const profitRate = lottoResult.getProfitRate();
      expect(profitRate).toBe('0.0');
    });
  });
});
