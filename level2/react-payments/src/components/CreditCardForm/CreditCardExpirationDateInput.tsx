import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardExpirationDateInput = () => {
  const { creditCardExpirationDate } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    const newCreditCardExpirationDate = creditCardExpirationDate.map(
      (date, index) => {
        if (index === formId) return value;
        return date;
      },
    ) as [number, number];

    dispatch({
      type: 'SET_CREDIT_CARD_EXPIRATION_DATE',
      payload: newCreditCardExpirationDate,
    });
  };

  const inputProps = {
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 2,
    maxLength: 2,
    letterSpacing: 'medium',
    onChange: handleChange,
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <InputWrapper gap={1} id="credit-card-expiration-date">
        <Input {...inputProps} placeholder="MM" data-form-id="0" />
        <Input {...inputProps} placeholder="YY" data-form-id="1" />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

export default CreditCardExpirationDateInput;
