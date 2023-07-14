import { forwardRef } from 'react';

export interface InputNumberFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumberField = forwardRef<HTMLInputElement, InputNumberFieldProps>(
  function InputNumberField(
    { maxLength = 4, onKeyDown, onChange, ...options },
    ref,
  ) {
    return (
      <input
        ref={ref}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder="○"
        type="number"
        {...options}
      />
    );
  },
);

export default InputNumberField;
