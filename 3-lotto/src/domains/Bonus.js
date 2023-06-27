class Bonus {
  #number;

  constructor(number) {
    this.#number = number;
  }

  get number() {
    return this.#number;
  }
}

module.exports = Bonus;
