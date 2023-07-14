import { createContext } from 'react';

interface InputNumberContextProps {
  values: number[];
  setValues: (value: number, currentIndex: number) => void;
  inputNumberRef: React.MutableRefObject<HTMLInputElement[]>;
  index: number;
  setIndex: (index: number) => void;
}

const InputNumberContext = createContext<InputNumberContextProps | null>(null);

export default InputNumberContext;
