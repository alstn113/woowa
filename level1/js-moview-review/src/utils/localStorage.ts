const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) return {};
  return JSON.parse(value);
};

const setLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocalStorage, setLocalStorage };
