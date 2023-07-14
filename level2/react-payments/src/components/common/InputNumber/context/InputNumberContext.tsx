import { createContext } from 'react';

interface InputNumberContextProps {
  value: number[];
  onChange: (value: number[]) => void;
}

const InputNumberContext = createContext<InputNumberContextProps | null>(null);

export default InputNumberContext;
