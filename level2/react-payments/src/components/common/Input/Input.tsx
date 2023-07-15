import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInValid?: boolean;
  isCenter?: boolean;
  letterSpacing?: 'small' | 'medium' | 'large';
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isInValid = false, isCenter = true, letterSpacing = 'medium', ...props },
  ref,
) {
  return (
    <S.InputContainer
      type="text"
      inputMode="text"
      autoComplete="off"
      isCenter={isCenter}
      isInvalid={isInValid}
      letterSpacing={letterSpacing}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
