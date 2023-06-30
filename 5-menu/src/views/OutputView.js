const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');

class OutputView {
  startRecommendation() {
    Console.print(MESSAGES.START_LUNCH_RECOMMENDATION);
  }

  printRecommendationResult(categoryForDays, recommedationResult) {
    Console.print(MESSAGES.RESULT_LUNCH_RECOMMENDATION);
    Console.print(`[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`);
    Console.print(
      `[ 카테고리 | ${categoryForDays
        .map((category) => category.getName())
        .join(' | ')} ]`,
    );
    recommedationResult.forEach(({ coachName, recommendMenus }) => {
      Console.print(`[ ${coachName} | ${recommendMenus.join(' | ')} ]`);
    });
    Console.print(MESSAGES.END_LUNCH_RECOMMENDATION);
  }
}

module.exports = OutputView;
