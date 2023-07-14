/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { cloneElement, useRef } from 'react';

import InputNumberField from './InputNumberField';
import getValidChildren from '../../../utils/getValidChildren';

interface InputNumberProps {
  children: React.ReactNode;
}

const InputNumber = ({ children }: InputNumberProps) => {
  const inputNumberRefs = useRef<HTMLInputElement[]>([]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    maxLength: number,
  ) => {
    const { key } = event;

    // focus previous input if value is empty and user presses backspace
    if (
      key === 'Backspace' &&
      event.currentTarget.value === '' &&
      inputNumberRefs.current[index - 1]
    ) {
      inputNumberRefs.current[index - 1].focus();
      return;
    }

    // focus next input if length is max
    if (
      event.currentTarget.value.length === maxLength &&
      inputNumberRefs.current[index + 1]
    ) {
      inputNumberRefs.current[index + 1].focus();
      return;
    }
  };

  const clones = getValidChildren(children).map((child, index) => {
    if (child.type === InputNumberField) {
      const maxLength = (child.props as { maxLength: number }).maxLength || 4;

      return cloneElement(child, {
        ref: (ref: HTMLInputElement) => {
          inputNumberRefs.current[index] = ref;
        },
        maxLength: maxLength,
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(event, index, maxLength),
      });
    }

    return child;
  });

  return <>{clones}</>;
};

InputNumber.Field = InputNumberField;

export default InputNumber;
