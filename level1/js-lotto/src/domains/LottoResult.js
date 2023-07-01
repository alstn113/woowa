import { LOTTO, PRIZE_AMOUNTS } from '../constants';

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
    this.#profitRate = null;

    this.#compareLottos();
    this.#calculateProfit();
  }

  #compareLottos() {
    this.#lottos.forEach((lotto) => {
      const matchingCount = this.#getMatchingCount(lotto);
      switch (true) {
        case matchingCount === 6:
          this.#matches[4] += 1;
          break;
        case matchingCount === 5 &&
          lotto.getNumbers().includes(this.#bonusNumber.getNumber()):
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

  #getMatchingCount(lotto) {
    return lotto
      .getNumbers()
      .filter((number) => this.#winningNumbers.getNumbers().includes(number))
      .length;
  }

  #calculateProfit() {
    this.#matches.forEach((count, idx) => {
      const prizeAmount = PRIZE_AMOUNTS[idx];
      this.#profit += count * prizeAmount;
    });

    const totalSpent = this.#lottos.length * LOTTO.PRICE;

    this.#profitRate = (this.#profit / totalSpent) * 100;
  }

  #parsedProfitRate() {
    const [a, b] = this.#profitRate.toFixed(1).split('.');
    return parseInt(a).toLocaleString() + '.' + b;
  }

  getMatches() {
    return this.#matches;
  }

  getProfit() {
    return this.#profit;
  }

  getProfitRate() {
    return this.#parsedProfitRate();
  }
}

export default LottoResult;
