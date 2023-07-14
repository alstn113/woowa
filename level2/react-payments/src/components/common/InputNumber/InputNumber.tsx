import { useEffect, useRef, useState } from 'react';

import InputNumberContext from './contexts/InputNumberContext';
import InputNumberField from './InputNumberField';

interface InputNumberProps {
  children: React.ReactNode;
}

const InputNumber = ({ children }: InputNumberProps) => {
  const [index, setIndex] = useState<number>(0);
  const [values, setValues] = useState<number[]>([]);
  const inputNumberRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: number, currentIndex: number) => {
    setValues((prevValues) => {
      const nextValues = [...prevValues];
      nextValues[currentIndex] = value;

      return nextValues;
    });
  };

  return (
    <InputNumberContext.Provider
      value={{
        values,
        setValues: handleChange,
        inputNumberRef,
        index,
        setIndex,
      }}
    >
      {children}
    </InputNumberContext.Provider>
  );
};

InputNumber.Field = InputNumberField;

export default InputNumber;
