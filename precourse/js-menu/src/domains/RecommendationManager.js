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
      const menus = menuNames.split(', ').map((menu) => new Menu(menu));
      this.#categories[idx + 1] = new Category(category, menus);
    });
  }

  recommendMenus() {
    const categoryForDays = this.#getRandomCategoryForDays();
    const recommendMenusForCoachs = this.#getRandomMenu(categoryForDays);
    return { categoryForDays, recommendMenusForCoachs };
  }

  #getRandomCategoryForDays() {
    const randomCategory = [];
    const categoryCount = [0, 0, 0, 0, 0, 0];

    while (randomCategory.length < 5) {
      const categoryIndex = Random.pickNumberInRange(1, 5);
      if (categoryCount[categoryIndex] === 2) continue;
      randomCategory.push(this.#categories[categoryIndex]);
      categoryCount[categoryIndex] += 1;
    }

    return randomCategory;
  }

  #getRandomMenu(categoryForDays) {
    const recommendMenusForCoachs = this.#coachs.map((coach) => {
      const excludedMenus = coach.getExcludeMenus();
      const recommendMenus = [];

      categoryForDays.forEach((category) => {
        while (true) {
          const menuIndexArr = category.getMenus().map((_, idx) => idx + 1);
          const menuIndex = Random.shuffle(menuIndexArr)[0];

          const menu = category.getMenus()[menuIndex - 1].getName();

          if (excludedMenus.includes(menu) || recommendMenus.includes(menu))
            continue;
          recommendMenus.push(menu);
          break;
        }
      });

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
