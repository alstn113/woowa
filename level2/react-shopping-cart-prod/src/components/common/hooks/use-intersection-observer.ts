import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  onIntersect: () => void,
  {
    root = null,
    rootMargin = '0%',
    threshold = 0,
    freezeOnceVisible = false,
  }: IntersectionObserverInit & {
    freezeOnceVisible?: boolean;
  } = {},
) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observerParams = { root, rootMargin, threshold };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          if (freezeOnceVisible) observer.disconnect();
        }
      });
    }, observerParams);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, root, rootMargin, threshold, freezeOnceVisible]);

  return targetRef;
};

export default useIntersectionObserver;
