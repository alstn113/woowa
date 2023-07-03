export const $ = (selector: string) => {
  const target = document.querySelector(selector);
  if (!target) {
    throw new Error(`해당하는 selector가 없습니다. ${selector}`);
  }
  return target;
};

export const $$ = (selector: string) => document.querySelectorAll(selector);
