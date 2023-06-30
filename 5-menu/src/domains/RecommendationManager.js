const Coach = require('./Coach');

class RecommendationManager {
  #coachs;

  constructor() {
    this.#coachs = [];
  }

  /**
   * 코치들의 이름을 받아서 코치 객체들을 생성한다.
   * @param {string[]} coachs
   */
  setCoachs(coachs) {
    this.#coachs = coachs.map((coach) => new Coach(coach));
  }
}

module.exports = RecommendationManager;
