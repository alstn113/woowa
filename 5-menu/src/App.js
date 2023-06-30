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
    });
  }
}

const app = new App();
app.play();

module.exports = App;
