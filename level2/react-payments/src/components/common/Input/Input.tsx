import React, { cloneElement } from 'react';

import getValidChildren from '../../../utils/getValidChildren';
import InputField from '../InputField/InputField';

interface InputProps {
  children: React.ReactNode;
}

const Input = ({ children }: InputProps) => {
  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child, index) => {
    if (child.type === InputField) {
      const clone = cloneElement(child, {
        ref: (el: HTMLInputElement) => (inputRefs.current[index] = el),
      });

      return clone;
    }
    return child;
  });

  return <div>{clones}</div>;
};

export default Input;
