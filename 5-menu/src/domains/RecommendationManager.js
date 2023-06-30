const Coach = require('./Coach');

class RecommendationManager {
  #coachs;

  constructor() {
    this.#coachs = [];
  }

  setCoachs(coachs) {
    this.#coachs = coachs.map((coach) => new Coach(coach));
  }

  setExcludeMenus(idx, excludeMenus) {
    const coach = this.#coachs[idx];
    coach.setExcludeMenus(excludeMenus);
  }

  getCoachs() {
    return this.#coachs;
  }
}

module.exports = RecommendationManager;
