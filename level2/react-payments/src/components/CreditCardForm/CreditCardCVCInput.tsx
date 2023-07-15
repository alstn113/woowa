import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import NumberInput from '../common/NumberInput/NumberInput';

const CreditCardCVCInput = () => {
  const dispatch = useCreditCardFormActions();
  const { validationResult, validateField } = useCreditCardFormValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    validateField('creditCardCVC', value);

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
        {validationResult.creditCardCVC}
      </InputWrapper>
    </section>
  );
};

const InputWrapper = styled.div`
  width: 30%;
`;

export default CreditCardCVCInput;
