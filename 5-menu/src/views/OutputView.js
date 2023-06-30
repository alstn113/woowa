const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');

class OutputView {
  startRecommendation() {
    Console.print(MESSAGES.START_LUNCH_RECOMMENDATION);
  }

  printRecommendationResult() {
    Console.print(MESSAGES.RESULT_LUNCH_RECOMMENDATION);
    Console.print(`[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`);
    Console.print(`[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]`);
    Console.print(MESSAGES.END_LUNCH_RECOMMENDATION);
  }
}

module.exports = OutputView;
