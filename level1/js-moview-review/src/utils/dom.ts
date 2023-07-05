const $ = (selector: string): HTMLElement => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`${selector} is not exist`);
  if (!(element instanceof HTMLElement))
    throw new Error(`${selector} is not HTMLElement`);
  return element;
};

const $$ = (selector: string): HTMLElement[] => {
  const elements = Array.from(document.querySelectorAll(selector));
  if (!elements) throw new Error(`${selector} is not exist`);

  return elements.map((element) => {
    if (!(element instanceof HTMLElement))
      throw new Error(`${selector} is not HTMLElement`);
    return element;
  });
};

export { $, $$ };
