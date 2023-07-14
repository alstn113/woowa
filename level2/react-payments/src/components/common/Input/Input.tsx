import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInValid?: boolean;
  isCenter?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isInValid = false, isCenter = false, ...props },
  ref,
) {
  return (
    <S.InputContainer
      isCenter={isCenter}
      isInvalid={isInValid}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
