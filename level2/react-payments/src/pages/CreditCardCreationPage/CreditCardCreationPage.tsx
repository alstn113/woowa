import styled from '@emotion/styled';

import CreditCardCVCInput from '../../components/CreditCardForm/CreditCardCVCInput';
import CreditCardExpirationDateInput from '../../components/CreditCardForm/CreditCardExpirationDateInput';
import CreditCardNumberInput from '../../components/CreditCardForm/CreditCardNumberInput';
import CreditCardOwnerNameInput from '../../components/CreditCardForm/CreditCardOwnerNameInput';
import CreditCardPasswordInput from '../../components/CreditCardForm/CreditCardPasswordInput';
import CreditCardView from '../../components/CreditCardView/CreditCardView';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { Spacing } from '../../styles/shared';

const CreditCardCreationPage = () => {
  const {
    creditCardCVC,
    creditCardCompany,
    creditCardExpirationDate,
    creditCardName,
    creditCardNumber,
    creditCardOwnerName,
    creditCardPassword,
  } = useCreditCardFormStates();

  const handleNexpStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <BaseLayout title="카드 추가" withBackButton>
      <CreditCardView
        creditCardCompanyName={creditCardCompany}
        creditCardNumber={creditCardNumber}
        creditCardExpirationDate={creditCardExpirationDate}
        creditCardOwnerName={creditCardOwnerName}
      />

      <Spacing y={2} />
      <Form onSubmit={handleNexpStep}>
        <CreditCardNumberInput />
        <CreditCardExpirationDateInput />
        <CreditCardOwnerNameInput />
        <CreditCardCVCInput />
        <CreditCardPasswordInput />
        <ButtonWrapper>
          <NextButton type="submit">다음</NextButton>
        </ButtonWrapper>
      </Form>
    </BaseLayout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  label {
    font-size: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NextButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
`;

export default CreditCardCreationPage;
