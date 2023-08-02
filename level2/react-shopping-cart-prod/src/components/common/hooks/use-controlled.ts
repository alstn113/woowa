import { useCallback, useRef, useState } from 'react';

interface UseControlledProps<T = unknown> {
  controlledValue?: T;
  defaultValue?: T;
}

const useControlled = <T = unknown>({
  controlledValue,
  defaultValue,
}: UseControlledProps<T>) => {
  const { current: isControlled } = useRef(controlledValue !== undefined);
  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const value = isControlled ? controlledValue : uncontrolledState;

  const setValueIfUncontrolled = useCallback(
    (next: React.SetStateAction<T>) => {
      if (!isControlled) {
        setUncontrolledState(next);
      }
    },
    [isControlled],
  );

  return [value, setValueIfUncontrolled] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
  ];
};

export default useControlled;
