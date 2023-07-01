import { LOTTO, PRIZE_AMOUNTS } from '../constants';

class LottoResult {
  #matches;
  #profitRate;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#matches = [0, 0, 0, 0, 0];
    this.#profitRate = null;

    this.#compareLottos(lottos, winningNumbers, bonusNumber);
    this.#calculateProfitRate(lottos);
  }

  #compareLottos(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchingCount = this.#getMatchingCount(winningNumbers, lotto);
      switch (true) {
        case matchingCount === 6:
          this.#matches[4] += 1;
          break;
        case matchingCount === 5 &&
          lotto.getNumbers().includes(bonusNumber.getNumber()):
          this.#matches[3] += 1;
          break;
        case matchingCount >= 3:
          this.#matches[matchingCount - 3] += 1;
          break;
        default:
          break;
      }
    });
  }

  #getMatchingCount(winningNumbers, lotto) {
    return lotto
      .getNumbers()
      .filter((number) => winningNumbers.getNumbers().includes(number)).length;
  }

  #calculateProfitRate(lottos) {
    const profit = this.#matches.reduce((acc, count, idx) => {
      const prizeAmount = PRIZE_AMOUNTS[idx];
      return acc + count * prizeAmount;
    }, 0);

    const totalSpent = lottos.length * LOTTO.PRICE;

    this.#profitRate = (profit / totalSpent) * 100;
  }

  #parsedProfitRate() {
    const [a, b] = this.#profitRate.toFixed(1).split('.');
    return parseInt(a).toLocaleString() + '.' + b;
  }

  getMatches() {
    return this.#matches;
  }

  getProfitRate() {
    return this.#parsedProfitRate();
  }
}

export default LottoResult;
