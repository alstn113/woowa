import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import ErrorMesssage from '../common/ErrorMessage/ErrorMessage';
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
    <Section>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <InputWrapper>
        <NumberInput
          type="password"
          isInValid={Boolean(validationResult.creditCardCVC)}
          required
          minLength={3}
          maxLength={3}
          onChange={handleChange}
        />
      </InputWrapper>
      <ErrorMesssage message={validationResult.creditCardCVC} />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 30%;
`;

export default CreditCardCVCInput;
