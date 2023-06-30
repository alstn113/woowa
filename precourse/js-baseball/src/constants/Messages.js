const MESSAGES = Object.freeze({
  GAME_START: `숫자 야구 게임을 시작합니다.`,
  EXIT_GAME: `게임 종료`,
  ENTER_NUMBERS: `숫자를 입력해주세요 : `,
  GUESS: {
    ALL_MATCHED: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    NOTHING: `낫싱`,
    STRIKE: (strike) => `${strike}스트라이크`,
    BALL: (ball) => `${ball}볼`,
  },
  START_OR_EXIT: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_INPUT: '1 또는 2를 입력하세요.',
  DUPLICATED_NUMBERS: '중복되지 않은 숫자를 입력하세요.',
  INVALID_LENGTH: '3자리 숫자를 입력하세요.',
});

const GAME_OPTIONS = Object.freeze({
  RESTART: '1',
  EXIT: '2',
});

module.exports = { MESSAGES, ERROR_MESSAGES, GAME_OPTIONS };
