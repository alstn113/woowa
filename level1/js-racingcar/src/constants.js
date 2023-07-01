export const MESSAGES = Object.freeze({
  START_GAME: '자동차 경주 개임을 시작합니다.',
  ENTER_CAR_NAMES:
    '\n경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ENTER_TRY_COUNT: '\n시도할 회수는 몇회인가요?\n',
  RACE_RESULT: '\n실행 결과',
});

export const ERRORS = Object.freeze({
  CAR_NAMES_EMPTY: '자동차 이름을 비어있을 수 없습니다.',
  INVALID_CAR_NAME_LENGTH: '자동차 이름은 1~5자만 가능합니다.',
  CAR_NAME_DUPLICATE: '자동차 이름은 중복될 수 없습니다.',
  INVALID_TRY_COUNT_RANGE: '시도 횟수는 1 이상이어야 합니다.',
  INVALID_TRY_COUNT_TYPE: '시도 횟수는 숫자여야 합니다.',
});
