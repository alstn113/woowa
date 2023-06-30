class Coach {
  #name;
  #excludeMenus = [];

  constructor(name) {
    this.#name = name;
  }

  setExcludeMenus(excludeMenus) {
    this.#excludeMenus = excludeMenus;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
