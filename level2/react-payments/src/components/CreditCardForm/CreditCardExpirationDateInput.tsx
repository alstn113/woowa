import styled from '@emotion/styled';

import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardExpirationDateInput = () => {
  const inputProps = {
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 2,
    maxLength: 2,
    letterSpacing: 'medium',
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <InputWrapper gap={1} id="credit-card-expiration-date">
        <Input
          {...inputProps}
          placeholder="MM"
          data-form-id="credit-card-expiration-date-months"
        />
        <Input
          {...inputProps}
          placeholder="YY"
          data-form-id="credit-card-expiration-date-years"
        />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

export default CreditCardExpirationDateInput;
