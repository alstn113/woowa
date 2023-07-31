import React, { useState, useCallback, useRef } from 'react';

interface UseControlledProps<T> {
  controlledValue?: T;
  defaultValue: T;
}

const useControlled = <T>({
  controlledValue,
  defaultValue,
}: UseControlledProps<T>) => {
  const [state, setState] = useState(defaultValue);

  const { current: isControlled } = useRef(controlledValue !== undefined);

  const value = isControlled ? controlledValue : state;
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (newState) => !isControlled && setState(newState),
    [isControlled],
  );

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
};

export default useControlled;
