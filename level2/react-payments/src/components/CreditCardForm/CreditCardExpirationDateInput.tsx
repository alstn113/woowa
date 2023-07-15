import styled from '@emotion/styled';
import { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import { SpaceBetween } from '../../styles/shared';
import ErrorMesssage from '../common/ErrorMessage/ErrorMessage';
import NumberInput from '../common/NumberInput/NumberInput';

const CreditCardExpirationDateInput = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { creditCardExpirationDate } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();
  const { validateField, validationResult } = useCreditCardFormValidation();
  const inputType = ['MM', 'YY'];

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const newCreditCardExpirationDate: [string, string] = [
        ...creditCardExpirationDate,
      ];
      newCreditCardExpirationDate[index] = value;

      validateField('creditCardExpirationDate', newCreditCardExpirationDate);

      dispatch({
        type: 'SET_CREDIT_CARD_EXPIRATION_DATE',
        payload: newCreditCardExpirationDate,
      });

      if (value.length === 2 && index < 1) {
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
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <InputWrapper gap={0.5} id="credit-card-expiration-date">
        {[0, 1].map((index) => {
          return (
            <NumberInput
              key={index}
              required
              isInValid={Boolean(validationResult.creditCardExpirationDate)}
              minLength={2}
              maxLength={2}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              placeholder={inputType[index]}
              ref={(el: HTMLInputElement) => {
                inputRefs.current[index] = el;
              }}
            />
          );
        })}
      </InputWrapper>
      <ErrorMesssage message={validationResult.creditCardExpirationDate} />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

export default CreditCardExpirationDateInput;
