type Timer = ReturnType<typeof setTimeout>;

export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timer: Timer | null = null;

  return (...args: Parameters<T>): void => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounce;
