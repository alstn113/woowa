const Category = require('./Category');
const Menu = require('./Menu');
const Coach = require('./Coach');
const { CATEGORY_MENU_DIC } = require('../constants');

class RecommendationManager {
  #coachs;
  #categories;

  constructor() {
    this.#coachs = [];
    this.#categories = this.#initCategories();
  }

  #initCategories() {
    this.#categories = Object.entries(CATEGORY_MENU_DIC).map(
      ([category, menus], idx) => {
        const menus = menus
          .split(',')
          .map((v) => v.trim())
          .map((menu) => new Menu(menu));
        return new Category(idx + 1, category, menus);
      },
    );
  }

  setCoachs(coachs) {
    this.#coachs = coachs.map((coach) => new Coach(coach));
  }

  setExcludeMenus(idx, excludeMenus) {
    const coach = this.#coachs[idx];
    coach.setExcludeMenus(excludeMenus);
  }

  getCoachs() {
    return this.#coachs;
  }
}

module.exports = RecommendationManager;
