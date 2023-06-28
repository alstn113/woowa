const { Console } = require('@woowacourse/mission-utils');
const {
  PRIZE_DESCRIPTIONS,
  PRIZE_AMOUNTS,
  LOTTO_OPTIONS,
} = require('../constants/constants');

class LottoResult {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #matches;
  #profit;
  #profitRate;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#matches = [0, 0, 0, 0, 0];
    this.#profit = 0;
    this.#profitRate = 0;

    this.#compareLottos();
    this.#calculateProfit();
  }

  #getMatchingCount(lotto) {
    return this.#winningNumbers.filter((number) => lotto.includes(number))
      .length;
  }

  #compareLottos() {
    this.#lottos.forEach((lotto) => {
      let matchingCount = this.#getMatchingCount(lotto);
      matchingCount -= 3;
      const isBonusMatch = lotto.includes(this.#bonusNumber);
      if ((matchingCount === 5 && isBonusMatch) || matchingCount === 6) {
        matchingCount += 1;
      }
      this.#matches[matchingCount] += 1;
    });
  }

  #calculateProfit() {
    this.#matches.forEach((count, idx) => {
      const prizeAmount = PRIZE_AMOUNTS[idx];
      this.#profit += count * prizeAmount;
    });

    const totalSpent = this.#lottos.length * LOTTO_OPTIONS.LOTTO_PRICE;

    this.#profitRate = (this.#profit / totalSpent) * 100;
  }

  #parsedProfitRate() {
    const [a, b] = this.#profitRate.toFixed(1).split('.');
    return parseInt(a).toLocaleString() + '.' + b;
  }

  printResult() {
    Console.print('\n당첨 통계');
    Console.print('---');
    this.#matches.forEach((count, idx) => {
      Console.print(
        `${PRIZE_DESCRIPTIONS[idx]} (${PRIZE_AMOUNTS[
          idx
        ].toLocaleString()}원) - ${count}개`,
      );
    });
    Console.print(`총 수익률은 ${this.#parsedProfitRate()}%입니다.`);
  }
}

module.exports = LottoResult;
