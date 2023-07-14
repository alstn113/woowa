import styled from '@emotion/styled';
import { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardPasswordInput = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { creditCardPassword } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    if (!/^[0-9]{0,1}$/.test(value)) return;

    const newCreditCardPassword = creditCardPassword.map((password, index) => {
      if (index === formId) return value;
      return password;
    }) as [number, number];

    dispatch({
      type: 'SET_CREDIT_CARD_PASSWORD',
      payload: newCreditCardPassword,
    });

    if (value.length === 1 && formId < 1) {
      inputRefs.current[formId + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, target } = e;
    const { value, dataset } = target as HTMLInputElement;
    const formId = Number(dataset.formId);

    if (key === 'Backspace' && value.length === 0 && formId > 0) {
      inputRefs.current[formId - 1].focus();
    }
  };

  const inputProps = {
    type: 'password',
    isCenter: true,
    required: true,
    minLength: 1,
    maxLength: 1,
    autoComplete: 'off',
    onChange: handleChange,
    onKeyDown: handleKeyDown,
  };

  return (
    <section>
      <label htmlFor="credit-card-password">카드 비밀번호</label>
      <InputWrapper gap={1} id="credit-card-password">
        <Input
          {...inputProps}
          ref={(el: HTMLInputElement) => {
            inputRefs.current[0] = el;
          }}
          data-form-id="0"
        />
        <Input
          {...inputProps}
          ref={(el: HTMLInputElement) => {
            inputRefs.current[1] = el;
          }}
          data-form-id="1"
        />
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
