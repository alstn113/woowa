export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
};

export const setToLocalStorage = <T>(key: string, value: T) => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};
