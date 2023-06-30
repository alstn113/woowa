class Coach {
  #name;
  #excludedMenus = [];

  constructor(name) {
    this.name = name;
  }

  /**
   * 코치의 못먹는 메뉴를 지정합니다.
   * @param {string[]} excludedMenus
   */
  setExcludedMenus(excludedMenus) {
    this.#excludedMenus = excludedMenus;
  }
}

module.exports = Coach;
