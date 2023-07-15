import styled from '@emotion/styled';

import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import useCreditCardFormValidation from '../../hooks/useCreditCardFormValidation';
import { SpaceBetween } from '../../styles/shared';
import ErrorMesssage from '../common/ErrorMessage/ErrorMessage';
import Input from '../common/Input/Input';

const CreditCardOwnerNameInput = () => {
  const { creditCardOwnerName } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();
  const { validateField, validationResult } = useCreditCardFormValidation();

  const ownerNameLength = creditCardOwnerName.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    validateField('creditCardOwnerName', value);

    dispatch({
      type: 'SET_CREDIT_CARD_OWNER_NAME',
      payload: value,
    });
  };

  return (
    <Section>
      <SpaceBetween>
        <label htmlFor="credit-card-owner-name">카드 소유자 이름(선택)</label>
        <span>{ownerNameLength} / 30</span>
      </SpaceBetween>
      <InputWrapper>
        <Input
          id="credit-card-owner-name"
          isCenter={false}
          letterSpacing="small"
          isInValid={Boolean(validationResult.creditCardOwnerName)}
          minLength={0}
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleChange}
        />
      </InputWrapper>
      <ErrorMesssage message={validationResult.creditCardOwnerName} />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
`;

export default CreditCardOwnerNameInput;
