import styled from '@emotion/styled';

import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-number">카드 번호</label>
      <InputWrapper className="credit-card-number">
        <Input
          type="text"
          isCenter
          required
          minLength={4}
          maxLength={4}
          data-form-id="credit-card-number-0"
        />
        <Input
          type="text"
          isCenter
          required
          minLength={4}
          maxLength={4}
          data-form-id="credit-card-number-1"
        />
        <Input
          type="password"
          isCenter
          required
          minLength={4}
          maxLength={4}
          data-form-id="credit-card-number-2"
        />
        <Input
          type="password"
          isCenter
          required
          minLength={4}
          maxLength={4}
          data-form-id="credit-card-number-3"
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

export default CreditCardNumberInput;
