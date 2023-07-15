import styled from '@emotion/styled';
import { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import { SpaceBetween } from '../../styles/shared';
import NumberInput from '../common/NumberInput/NumberInput';

const CreditCardPasswordInput = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { creditCardPassword } = useCreditCardFormStates();
  const { validateField, validationResult } = useCreditCardFormValidation();
  const dispatch = useCreditCardFormActions();

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const creditCardPasswordArray = [...creditCardPassword];
      creditCardPasswordArray[index] = value;
      const newCreditCardPassword = creditCardPasswordArray.join('');

      validateField('creditCardPassword', newCreditCardPassword);

      dispatch({
        type: 'SET_CREDIT_CARD_PASSWORD',
        payload: newCreditCardPassword,
      });

      if (value.length === 1 && index < 1) {
        inputRefs.current[index + 1].focus();
      }
    };

  const handleKeyDown =
    (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key, target } = e;
      const { value } = target as HTMLInputElement;

      if (key === 'Backspace' && value.length === 0 && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

  return (
    <section>
      <label htmlFor="credit-card-password">카드 비밀번호</label>
      <InputWrapper gap={1} id="credit-card-password">
        {[0, 1].map((index) => {
          return (
            <NumberInput
              key={index}
              type="password"
              required
              minLength={1}
              maxLength={1}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              ref={(el: HTMLInputElement) => {
                inputRefs.current[index] = el;
              }}
              data-form-id={index}
            />
          );
        })}
        <PasswordMasking />
        <PasswordMasking />
      </InputWrapper>
      {validationResult.creditCardPassword}
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
