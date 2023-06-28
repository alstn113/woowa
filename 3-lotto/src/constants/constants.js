const MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASE_RESPONSE: (amount) => `\n${amount}개를 구매했습니다.`,
  ENTER_WINNING_NUMBERS: `\n당첨 번호를 입력해 주세요.\n`,
  ENTER_BONUS_NUMBER: `\n보너스 번호를 입력해 주세요.\n`,
});

const ERROR_MESSAGES = Object.freeze({
  INPUT_IS_NOT_NUMBER: '숫자를 입력해 주세요.',
  NOT_MULTIPLE_OF_1000: '1000원 단위로 입력해 주세요.',
  LEAST_PRICE: '최소 1000원 이상 입력해 주세요.',
  //
  LOTTO_WRONG_LENGTH: '로또 번호는 6개여야 합니다.',
  LOTTO_DUPLICATED_NUMBER: '로또 번호는 중복될 수 없습니다.',
  LOTTO_OUT_OF_RANGE: '로또 번호는 1 ~ 45 사이여야 합니다.',
  LOTTO_WRONG_TYPE: '로또 번호는 숫자여야 합니다.',
  //
  BONUS_WRONG_TYPE: '보너스 번호는 숫자여야 합니다.',
  BONUS_OUT_OF_RANGE: '보너스 번호는 1 ~ 45 사이여야 합니다.',
  BONUS_DUPLICATED_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

const PRIZE_AMOUNTS = Object.freeze([
  5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000,
]);

const PRIZE_DESCRIPTIONS = Object.freeze([
  '3개 일치',
  '4개 일치',
  '5개 일치',
  '5개 일치, 보너스 볼 일치',
  '6개 일치',
]);

const LOTTO_OPTIONS = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_COUNT: 6,
  LOTTO_MIN_NUMBER: 1,
  LOTTO_MAX_NUMBER: 45,
});

module.exports = {
  MESSAGES,
  ERROR_MESSAGES,
  PRIZE_AMOUNTS,
  PRIZE_DESCRIPTIONS,
  LOTTO_OPTIONS,
};
