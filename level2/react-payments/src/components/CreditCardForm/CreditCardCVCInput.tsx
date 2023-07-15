import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import Input from '../common/Input/Input';

const CreditCardCVCInput = () => {
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!/^[0-9]{0,3}$/.test(value)) return;

    dispatch({
      type: 'SET_CREDIT_CARD_CVC',
      payload: value,
    });
  };

  return (
    <section>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <InputWrapper>
        <Input
          type="password"
          autoComplete="off"
          isCenter
          required
          minLength={3}
          maxLength={3}
          letterSpacing="medium"
          onChange={handleChange}
        />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled.div`
  width: 30%;
`;

export default CreditCardCVCInput;
