import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInValid?: boolean;
  isCenter?: boolean;
  letterSpacing?: 'small' | 'medium' | 'large';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    isInValid = false,
    isCenter = true,
    letterSpacing = 'medium',
    onChange,
    ...props
  },
  ref,
) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <S.InputContainer
      type="text"
      inputMode="text"
      autoComplete="off"
      isCenter={isCenter}
      isInvalid={isInValid}
      letterSpacing={letterSpacing}
      onChange={handleChange}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
