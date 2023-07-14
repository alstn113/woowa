import styled from '@emotion/styled';

import CreditCardCVCInput from '../../components/CreditCardForm/CreditCardCVCInput';
import CreditCardExpirationDateInput from '../../components/CreditCardForm/CreditCardExpirationDateInput';
import CreditCardNumberInput from '../../components/CreditCardForm/CreditCardNumberInput';
import CreditCardOwnerNameInput from '../../components/CreditCardForm/CreditCardOwnerNameInput';
import CreditCardPasswordInput from '../../components/CreditCardForm/CreditCardPasswordInput';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const CreditCardCreationPage = () => {
  return (
    <BaseLayout title="카드 추가" withBackButton>
      <CreditCardWrapper>카드 표시</CreditCardWrapper>
      <Form>
        <CreditCardNumberInput />
        <CreditCardExpirationDateInput />
        <CreditCardOwnerNameInput />
        <CreditCardCVCInput />
        <CreditCardPasswordInput />
      </Form>
    </BaseLayout>
  );
};

const CreditCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 10rem;
  width: 20rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default CreditCardCreationPage;
