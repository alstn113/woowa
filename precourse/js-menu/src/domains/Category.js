class Category {
  #name;
  #menus;

  constructor(name, menus) {
    this.#name = name;
    this.#menus = menus;
  }

  getName() {
    return this.#name;
  }

  getMenus() {
    return this.#menus;
  }
}

module.exports = Category;
