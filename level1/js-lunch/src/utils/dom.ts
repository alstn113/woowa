export const $ = (selector: string): HTMLElement | null =>
  document.querySelector(selector);

export const $$ = (selector: string): NodeList =>
  document.querySelectorAll(selector);
