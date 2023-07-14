import styled from '@emotion/styled';

import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardPasswordInput = () => {
  const inputProps = {
    type: 'password',
    isCenter: true,
    required: true,
    minLength: 1,
    maxLength: 1,
    autoComplete: 'off',
  };
  return (
    <section>
      <label htmlFor="credit-card-password">카드 비밀번호</label>
      <InputWrapper gap={1} id="credit-card-password">
        <Input {...inputProps} id="credit-card-password-1" />
        <Input {...inputProps} id="credit-card-password-2" />
        <PasswordMasking />
        <PasswordMasking />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

const PasswordMasking = styled.div`
  &::before {
    content: '•';
  }
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  padding: 0.5rem;
  vertical-align: middle;
  text-align: center;
`;

export default CreditCardPasswordInput;
