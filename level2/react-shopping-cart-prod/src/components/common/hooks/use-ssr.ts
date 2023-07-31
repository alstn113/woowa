import { useEffect, useState } from 'react';

const checkIsBrowser = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement,
);

const useSSR = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(checkIsBrowser);
  }, []);

  return {
    isBrowser,
    isServer: !isBrowser,
  };
};

export default useSSR;
