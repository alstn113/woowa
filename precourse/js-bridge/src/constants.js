const MESSAGES = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.',
  ENTER_BRIDGE_LENGTH: '\n다리의 길이를 입력해주세요.\n',
  ENTER_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  SELECT_RETRY_OR_EXIT:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  BRIDGE_RESULT: '\n최종 게임 결과',
  GAME_RESULT: '게임 성공 여부',
  SUCCESS: '성공',
  FAIL: '실패',
  TOTAL_ATTEMPTS: '총 시도한 횟수',
});

const ERRORS = Object.freeze({
  BRIDGE_INPUT_NOT_NUMBER: '다리 길이는 숫자만 가능합니다.',
  BRIDGE_LENGTH_RANGE: '다리의 길이는 3 이상 20 이하의 숫자만 가능합니다.',
  WRONG_MOVING: '이동할 칸은 위(U) 또는 아래(D)만 가능합니다.',
  WRONG_COMMAND: 'R(재시도) 또는 Q(종료)만 입력 가능합니다.',
});

const BRIDGE = Object.freeze({
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
});

const POSITIONS = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const COMMAND = Object.freeze({
  RETRY: 'R',
  EXIT: 'Q',
});

module.exports = {
  MESSAGES,
  ERRORS,
  BRIDGE,
  POSITIONS,
  COMMAND,
};
