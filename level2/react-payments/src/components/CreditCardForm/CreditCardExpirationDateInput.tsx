import styled from '@emotion/styled';
import { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardExpirationDateInput = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { creditCardExpirationDate } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    if (!/^[0-9]{0,2}$/.test(value)) return;

    const newCreditCardExpirationDate = creditCardExpirationDate.map(
      (date, index) => {
        if (index === formId) return value;
        return date;
      },
    ) as [string, string];

    dispatch({
      type: 'SET_CREDIT_CARD_EXPIRATION_DATE',
      payload: newCreditCardExpirationDate,
    });

    if (value.length === 2 && formId < 1) {
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
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 2,
    maxLength: 2,
    letterSpacing: 'medium',
    onChange: handleChange,
    onKeyDown: handleKeyDown,
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <InputWrapper gap={1} id="credit-card-expiration-date">
        <Input
          {...inputProps}
          placeholder="MM"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[0] = el;
          }}
          data-form-id="0"
        />
        <Input
          {...inputProps}
          placeholder="YY"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[1] = el;
          }}
          data-form-id="1"
        />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

export default CreditCardExpirationDateInput;
