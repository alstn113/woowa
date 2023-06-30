const { ERROR_MESSAGES } = require('../src/constants/constants');
const Lotto = require('../src/domains/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(`[ERROR] ${ERROR_MESSAGES.LOTTO_WRONG_LENGTH}`);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(`[ERROR] ${ERROR_MESSAGES.LOTTO_DUPLICATED_NUMBER}`);
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 정상인 경우이다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    expect(new Lotto(numbers).numbers).toEqual(numbers);
  });

  test('로또 번호 범위가 벗어나면 예외가 발생한다. (lotto <= 45)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(`[ERROR] ${ERROR_MESSAGES.LOTTO_OUT_OF_RANGE}`);
  });

  test('로또 번호 범위가 벗어나면 예외가 발생한다. (lotto > 0)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -1]);
    }).toThrow(`[ERROR] ${ERROR_MESSAGES.LOTTO_OUT_OF_RANGE}`);
  });

  test('로또 번호의 타입이 잘못된 경우 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, '6'];
    expect(() => {
      new Lotto(numbers);
    }).toThrow(`[ERROR] ${ERROR_MESSAGES.LOTTO_WRONG_TYPE}`);
  });
});
