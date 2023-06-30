class Category {
  #index;
  #name;
  #menus;

  constructor(index, name, menus) {
    this.#name = name;
    this.#menus = menus;
  }

  getIndex() {
    return this.#index;
  }

  getName() {
    return this.#name;
  }

  getMenus() {
    return this.#menus;
  }
}

module.exports = Category;
