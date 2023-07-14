import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInValid?: boolean;
  isCenter?: boolean;
  letterSpacing?: 'small' | 'medium' | 'large';
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isInValid = false, isCenter = false, letterSpacing = 'small', ...props },
  ref,
) {
  return (
    <S.InputContainer
      isCenter={isCenter}
      isInvalid={isInValid}
      letterSpacing={letterSpacing}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
