class OutputView {
  constructor() {
    throw new Error('This class cannot be instantiated.');
  }

  static print(message) {
    console.log(message);
  }
}

export default OutputView;
