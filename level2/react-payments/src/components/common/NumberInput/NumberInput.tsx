import { forwardRef, useState } from 'react';

import Input, { InputProps } from '../Input/Input';

type NumberInputProps = InputProps;

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput({ onChange, ...props }, ref) {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (/\D/.test(value)) return;

      onChange?.(e);
      setValue(value);
    };

    return (
      <Input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    );
  },
);

export default NumberInput;
