class LottoResult {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #matches;
  #profitRate;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#matches = [0, 0, 0, 0, 0];
    this.#profitRate = null;

    this.#compareLottos();
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

  getMatches() {
    return this.#matches;
  }
}

export default LottoResult;
