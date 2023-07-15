import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import NumberInput from '../common/NumberInput/NumberInput';

const CreditCardCVCInput = () => {
  const dispatch = useCreditCardFormActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch({
      type: 'SET_CREDIT_CARD_CVC',
      payload: value,
    });
  };

  return (
    <section>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <InputWrapper>
        <NumberInput
          type="password"
          required
          minLength={3}
          maxLength={3}
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
