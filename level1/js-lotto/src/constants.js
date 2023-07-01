export const LOTTO = Object.freeze({
  PRICE: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

export const MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASE_RESPONSE: (amount) => `\n${amount}개를 구매했습니다.`,
  ENTER_WINNING_NUMBERS: `\n당첨 번호를 입력해 주세요.\n`,
  ENTER_BONUS_NUMBER: `\n보너스 번호를 입력해 주세요.\n`,
});

export const ERRORS = Object.freeze({
  PURCHASE_AMOUNT: Object.freeze({
    WRONG_TYPE: '구매 금액은 숫자여야 합니다.',
    NOT_MULTIPLE_OF_LOTTO_PRICE: `구매 금액은 ${LOTTO.PRICE}원 단위로 입력해 주세요.`,
  }),
  LOTTO: Object.freeze({
    WRONG_LENGTH: `로또 번호는 ${LOTTO.COUNT}개여야 합니다.`,
    DUPLICATED_NUMBER: '로또 번호는 중복될 수 없습니다.',
    OUT_OF_RANGE: `로또 번호는 ${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이여야 합니다.`,
    WRONG_TYPE: '로또 번호는 숫자여야 합니다.',
  }),
  BONUS: Object.freeze({
    WRONG_TYPE: '보너스 번호는 숫자여야 합니다.',
    OUT_OF_RANGE: `보너스 번호는 ${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이여야 합니다.`,
    DUPLICATED_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  }),
});

export const PRIZE_AMOUNTS = Object.freeze([
  5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000,
]);

export const PRIZE_DESCRIPTIONS = Object.freeze([
  '3개 일치',
  '4개 일치',
  '5개 일치',
  '5개 일치, 보너스 볼 일치',
  '6개 일치',
]);
