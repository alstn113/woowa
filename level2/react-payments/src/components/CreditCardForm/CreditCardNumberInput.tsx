import styled from '@emotion/styled';
import React, { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import { SpaceBetween } from '../../styles/shared';
import ErrorMesssage from '../common/ErrorMessage/ErrorMessage';
import NumberInput from '../common/NumberInput/NumberInput';

const CreditCardNumberInput = () => {
  const dispatch = useCreditCardFormActions();
  const { creditCardNumber } = useCreditCardFormStates();
  const { validateField, validationResult } = useCreditCardFormValidation();
  const masked = [false, false, true, true];

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const getCreditCardNumberPartByIndex = (index: number) => {
    return creditCardNumber.split('-')[index] ?? '';
  };

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const creditCardNumberParts = creditCardNumber.split('-');
      creditCardNumberParts[index] = value;
      const newCreditCardNumber = creditCardNumberParts.join('-');

      validateField('creditCardNumber', newCreditCardNumber);

      dispatch({
        type: 'SET_CREDIT_CARD_NUMBER',
        payload: newCreditCardNumber,
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
    <Section>
      <label htmlFor="credit-card-number">카드 번호</label>
      <SpaceBetween gap={0.5} className="credit-card-number">
        {[0, 1, 2, 3].map((index) => {
          const value = getCreditCardNumberPartByIndex(index);
          const isMasked = masked[index];

          return (
            <NumberInput
              type={isMasked ? 'password' : 'text'}
              required
              isInValid={Boolean(validationResult.creditCardNumber)}
              minLength={4}
              maxLength={4}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              key={index}
              value={value}
              ref={(el: HTMLInputElement) => {
                inputRefs.current[index] = el;
              }}
            />
          );
        })}
      </SpaceBetween>
      <ErrorMesssage message={validationResult.creditCardNumber} />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
`;

export default CreditCardNumberInput;
