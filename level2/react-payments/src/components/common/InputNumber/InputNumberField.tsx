import { forwardRef } from 'react';

export interface InputNumberFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputNumberField = forwardRef<HTMLInputElement, InputNumberFieldProps>(
  function InputNumberField({ maxLength = 4, onKeyDown, ...options }, ref) {
    return (
      <input
        {...options}
        ref={ref}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        placeholder="O"
      />
    );
  },
);

export default InputNumberField;
