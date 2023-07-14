import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardPasswordInput = () => {
  const { creditCardPassword } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    const newCreditCardPassword = creditCardPassword.map((password, index) => {
      if (index === formId) return value;
      return password;
    }) as [number, number];

    dispatch({
      type: 'SET_CREDIT_CARD_PASSWORD',
      payload: newCreditCardPassword,
    });
  };

  const inputProps = {
    type: 'password',
    isCenter: true,
    required: true,
    minLength: 1,
    maxLength: 1,
    autoComplete: 'off',
    onChange: handleChange,
  };

  return (
    <section>
      <label htmlFor="credit-card-password">카드 비밀번호</label>
      <InputWrapper gap={1} id="credit-card-password">
        <Input {...inputProps} data-form-id="0" />
        <Input {...inputProps} data-form-id="1" />
        <PasswordMasking />
        <PasswordMasking />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled(SpaceBetween)`
  width: 50%;
`;

const PasswordMasking = styled.div`
  &::before {
    content: '•';
  }
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  padding: 0.5rem;
  vertical-align: middle;
  text-align: center;
`;

export default CreditCardPasswordInput;
