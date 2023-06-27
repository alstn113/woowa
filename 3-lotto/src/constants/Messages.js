const MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: `구입금액을 입력해 주세요.\n`,
  PURCHASE_RESPONSE: (amount) => `\n${amount}개를 구매했습니다.`,
  ENTER_WINNING_NUMBERS: `\n당첨 번호를 입력해 주세요.\n`,
  ENTER_BONUS_NUMBER: `보너스 번호를 입력해 주세요.\n`,
});

const ERROR_MESSAGES = Object.freeze({
  INPUT_IS_NOT_NUMBER: '숫자를 입력해 주세요.',
  NOT_MULTIPLE_OF_1000: '1000원 단위로 입력해 주세요.',
  LEAST_PRICE: '최소 1000원 이상 입력해 주세요.',
  LOTTO_WRONG_LENGTH: '로또 번호는 6개여야 합니다.',
  LOTTO_DUPLICATED_NUMBER: '로또 번호는 중복될 수 없습니다.',
  LOTTO_OUT_OF_RANGE: '로또 번호는 1 ~ 45 사이여야 합니다.',
  LOTTO_WRONG_TYPE: '로또 번호는 숫자여야 합니다.',
});

module.exports = {
  MESSAGES,
  ERROR_MESSAGES,
};
