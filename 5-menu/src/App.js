class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  play() {
    this.#outputView.startRecommendation();
    this.#readCoachsNames();
  }

  #readCoachsNames() {}
}

const app = new App();
app.play();

module.exports = App;
