const Menu = require('./Menu');

class Coach {
  #name;
  #excludeMenus;

  constructor(name) {
    this.#name = name;
    this.#excludeMenus = [];
  }

  setExcludeMenus(excludeMenus) {
    this.#excludeMenus = excludeMenus.map((menu) => new Menu(menu));
  }

  getName() {
    return this.#name;
  }

  getExcludeMenus() {
    return this.#excludeMenus;
  }
}

module.exports = Coach;
