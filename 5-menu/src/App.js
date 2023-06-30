const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const RecommendationManager = require('./domains/RecommendationManager');

class App {
  #inputView;
  #outputView;
  #recommendationManager;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#recommendationManager = new RecommendationManager();
  }

  play() {
    this.#outputView.startRecommendation();
    this.#readCoachs();
  }

  #readCoachs() {
    this.#inputView.readCoachs((coachs) => {
      this.#recommendationManager.setCoachs(coachs);
      this.#readExcludeMenus();
    });
  }

  #readExcludeMenus(idx = 0) {
    const coachs = this.#recommendationManager.getCoachs();
    if (idx === coachs.length) return this.#printRecommendationResult();

    const coachName = coachs[idx].getName();

    this.#inputView.readExcludeMenus(coachName, (excludeMenus) => {
      this.#recommendationManager.setExcludeMenus(idx, excludeMenus);
      return this.#readExcludeMenus(idx + 1);
    });
  }

  #printRecommendationResult() {
    const coachs = this.#recommendationManager.getCoachs();
    this.#outputView.printRecommendationResult(coachs);
  }
}

const app = new App();
app.play();

module.exports = App;
