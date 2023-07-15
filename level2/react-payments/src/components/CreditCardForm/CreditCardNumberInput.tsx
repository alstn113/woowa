import React, { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  const dispatch = useCreditCardFormActions();
  const { creditCardNumber } = useCreditCardFormStates();
  const masked = [false, false, true, true];

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const getCreditCardNumberPartByIndex = (index: number) => {
    return creditCardNumber.split('-')[index] ?? '';
  };

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (!/^[0-9]{0,4}$/.test(value)) return;

      const creditCardNumberParts = creditCardNumber.split('-');
      creditCardNumberParts[index] = value;

      dispatch({
        type: 'SET_CREDIT_CARD_NUMBER',
        payload: creditCardNumberParts.join('-'),
      });

      if (value.length === 4 && index < 3) {
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
      <label htmlFor="credit-card-number">카드 번호</label>
      <SpaceBetween gap={1} className="credit-card-number">
        {[0, 1, 2, 3].map((index) => {
          const value = getCreditCardNumberPartByIndex(index);
          const isMasked = masked[index];

          return (
            <Input
              type={isMasked ? 'password' : 'text'}
              autoComplete="off"
              isCenter
              required
              minLength={4}
              maxLength={4}
              letterSpacing="medium"
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              key={index}
              value={value}
              data-form-id={index}
              ref={(el: HTMLInputElement) => {
                inputRefs.current[index] = el;
              }}
            />
          );
        })}
      </SpaceBetween>
    </section>
  );
};

export default CreditCardNumberInput;
