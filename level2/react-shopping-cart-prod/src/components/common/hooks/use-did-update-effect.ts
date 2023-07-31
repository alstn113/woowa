import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (
  callback: () => void,
  deps: React.DependencyList,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidUpdateEffect;
