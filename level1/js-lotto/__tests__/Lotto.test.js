import Lotto from '../src/domains/Lotto';

describe('Lotto', () => {
  test('생성자 테스트', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test('로또 생성 테스트', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    expect(lotto.getNumbers()).toEqual(numbers);
  });

  describe('로또 번호 유효성 검사', () => {
    test('로또 번호가 6개보다 적을 경우', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(() => new Lotto(numbers)).toThrow();
    });

    test('로또 번호가 6개보다 많을 경우', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      expect(() => new Lotto(numbers)).toThrow();
    });

    test('로또 번호가 중복일 경우', () => {
      const numbers = [1, 2, 3, 4, 5, 5];
      expect(() => new Lotto(numbers)).toThrow();
    });

    test('로또 번호가 1보다 작을 경우', () => {
      const numbers = [1, 2, 3, 4, 5, 0];
      expect(() => new Lotto(numbers)).toThrow();
    });

    test('로또 번호가 45보다 클 경우', () => {
      const numbers = [1, 2, 3, 4, 5, 46];
      expect(() => new Lotto(numbers)).toThrow();
    });

    test('로또 번호가 숫자가 아닐 경우', () => {
      const numbers = [1, 2, 3, 4, 5, 'a'];
      expect(() => new Lotto(numbers)).toThrow();
    });
  });
});
