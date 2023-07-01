class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  progress() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter(
      (car) => car.getPosition() === maxPosition,
    );
    return winners;
  }

  getCars() {
    return this.#cars;
  }
}

export default Race;
