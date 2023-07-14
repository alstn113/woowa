import { forwardRef, useRef } from 'react';

import useInputNumber from './hooks/useInputNumber';
import { mergeRefs, useMergeRefs } from '../../../hooks/useMergeRefs';

export interface InputNumberFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
}

const InputNumberField = ({
  maxLength = 4,
  ...options
}: InputNumberFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { inputNumberRef, setValues, index, setIndex } = useInputNumber();

  setIndex(index + 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!validate(value, maxLength)) return;
    console.log(inputNumberRef);

    // setValues(Number(e.target.value), index);
  };

  const validate = (value: string, maxLength: number) => {
    const regex = new RegExp(`^[0-9]{1,${maxLength}}$`);
    return regex.test(value);
  };

  return (
    <input
      ref={ref}
      maxLength={maxLength}
      onChange={handleChange}
      placeholder="○"
      type="number"
      data-index={index}
      {...options}
    />
  );
};

export default InputNumberField;
