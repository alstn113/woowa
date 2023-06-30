const Category = require('./Category');
const Menu = require('./Menu');
const Coach = require('./Coach');
const { CATEGORY_MENU_DIC } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');
class RecommendationManager {
  #coachs;
  #categories;

  constructor() {
    this.#coachs = [];
    this.#categories = {};
    this.#initCategories();
  }

  #initCategories() {
    Object.entries(CATEGORY_MENU_DIC).map(([category, menuNames], idx) => {
      const menus = menuNames
        .split(',')
        .map((v) => v.trim())
        .map((menu) => new Menu(menu));
      this.#categories[idx + 1] = new Category(category, menus);
    });
  }

  recommendMenus() {
    const recommendMenusForCoachs = this.#coachs.map((coach) => {
      const excludedMenus = coach.getExcludeMenus();
      const categoryCount = [0, 0, 0, 0, 0, 0];
      const recommendMenus = [];

      while (recommendMenus.length < 5) {
        // random category
        const categoryIndex = Random.pickNumberInRange(1, 5);
        if (categoryCount[categoryIndex] === 2) continue;
        const category = this.#categories[categoryIndex];

        // random menu
        const menuIndex = Random.shuffle(
          category.getMenus().map((_, idx) => idx + 1),
        )[0];
        const menu = category.getMenus()[menuIndex].getName();

        // check duplicated or frequency
        if (excludedMenus.includes(menu) || recommendMenus.includes(menu))
          continue;
        recommendMenus.push(menu);
        categoryCount[categoryIndex] += 1;
      }

      return { coachName: coach.getName(), recommendMenus };
    });

    return recommendMenusForCoachs;
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
