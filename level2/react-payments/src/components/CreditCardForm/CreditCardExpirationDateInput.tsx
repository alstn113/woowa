import styled from '@emotion/styled';

import Input from '../common/Input/Input';

const CreditCardExpirationDateInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <InputWrapper id="credit-card-expiration-date">
        <Input
          type="text"
          isCenter
          required
          minLength={2}
          maxLength={2}
          placeholder="MM"
          data-form-id="credit-card-expiration-date-months"
        />
        <Input
          type="text"
          isCenter
          required
          minLength={2}
          maxLength={2}
          placeholder="YY"
          data-form-id="credit-card-expiration-date-years"
        />
      </InputWrapper>
    </div>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

export default CreditCardExpirationDateInput;
