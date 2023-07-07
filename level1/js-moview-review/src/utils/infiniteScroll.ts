import debounce from './debounce';

const infiniteScroll = (
  element: HTMLElement,
  callback: () => void,
  threshold: number = 0.5,
) => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          debounce(() => callback(), 500)();
        }
      },
      {
        threshold,
      },
    );
  });

  io.observe(element);
};

export default infiniteScroll;
