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
      payload: Number(value),
    });
  };

  const inputProps = {
    type: 'password',
    isCenter: true,
    required: true,
    minLength: 3,
    maxLength: 3,
    letterSpacing: 'medium',
    onChange: handleChange,
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <InputWrapper>
        <Input {...inputProps} />
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled.div`
  width: 30%;
`;

export default CreditCardCVCInput;
