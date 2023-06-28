const MESSAGES = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.',
  ENTER_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  ENTER_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  SELECT_RETRY_OR_EXIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  BRIDGE_RESULT: '최종 게임 결과',
  GAME_RESULT: '게임 성공 여부',
  SUCCESS: '성공',
  FAIL: '실패',
  TOTAL_ATTEMPTS: '총 시도한 횟수',
});

const ERROR = Object.freeze({});

const COMMAND = Object.freeze({
  RETRY: 'R',
  EXIT: 'Q',
  UP: 'U',
  DOWN: 'D',
});
