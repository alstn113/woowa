const infiniteScroll = (
  element: HTMLElement,
  callback: () => void,
  threshold: number = 0.5,
) => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          callback();
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
