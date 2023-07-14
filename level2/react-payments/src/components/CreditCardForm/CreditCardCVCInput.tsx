import styled from '@emotion/styled';

import Input from '../common/Input/Input';

const CreditCardCVCInput = () => {
  const inputProps = {
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 3,
    maxLength: 3,
    letterSpacing: 'medium',
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <InputWrapper>
        <Input {...inputProps} data-form-id="credit-card-cvc" />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled.div`
  width: 30%;
`;

export default CreditCardCVCInput;
