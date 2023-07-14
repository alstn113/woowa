import React, { useRef } from 'react';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  const dispatch = useCreditCardFormActions();
  const { creditCardNumber } = useCreditCardFormStates();

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    if (!/^[0-9]{0,4}$/.test(value)) return;

    const newCreditCardNumber = creditCardNumber.map((number, index) => {
      if (index === formId) return value;
      return number;
    });

    dispatch({
      type: 'SET_CREDIT_CARD_NUMBER',
      payload: newCreditCardNumber,
    });

    if (value.length === 4 && formId < 3) {
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
    minLength: 4,
    maxLength: 4,
    letterSpacing: 'medium',
    onChange: handleChange,
    onKeyDown: handleKeyDown,
  } as const;

  const maskingInputProps = {
    ...inputProps,
    type: 'password',
    autoComplete: 'off',
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-number">카드 번호</label>
      <SpaceBetween gap={1} className="credit-card-number">
        <Input
          {...inputProps}
          value={creditCardNumber[0]}
          data-form-id="0"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[0] = el;
          }}
        />
        <Input
          {...inputProps}
          value={creditCardNumber[1]}
          data-form-id="1"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[1] = el;
          }}
        />
        <Input
          {...maskingInputProps}
          value={creditCardNumber[2]}
          data-form-id="2"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[2] = el;
          }}
        />
        <Input
          {...maskingInputProps}
          value={creditCardNumber[3]}
          data-form-id="3"
          ref={(el: HTMLInputElement) => {
            inputRefs.current[3] = el;
          }}
        />
      </SpaceBetween>
    </section>
  );
};

export default CreditCardNumberInput;
