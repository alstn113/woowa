const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');

class OutputView {
  startRecommendation() {
    Console.print(MESSAGES.START_LUNCH_RECOMMENDATION);
  }

  printRecommendationResult() {}
}

module.exports = OutputView;
