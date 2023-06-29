// 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
// BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
// BridgeGame의 파일 경로는 변경할 수 있다.
// BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #history;

  static totalAttempts = 0;

  constructor(bridgeLength) {
    this.#bridge = makeBridge(bridgeLength, () => generate());
    this.#history = [];
  }

  move(moving) {
    this.#history.push(moving);
    const isAlive = moving === this.#bridge[this.#history.length - 1];
    const isGameClear = isAlive && this.#history.length === this.#bridge.length;
    return { isAlive, history: this.#history, isGameClear };
  }

  retry() {
    this.#history = [];
  }

  getBridge() {
    return this.#bridge;
  }

  getHistory() {
    return this.#history;
  }
}

module.exports = BridgeGame;
