import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input/Input';
import CreditCardView from '../../components/CreditCardView/CreditCardView';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import { PAGE_ROUTES } from '../../constants';
import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';

const CreditCardNamingPage = () => {
  const {
    creditCardCompany,
    creditCardExpirationDate,
    creditCardNumber,
    creditCardOwnerName,
  } = useCreditCardFormStates();
  const navigate = useNavigate();

  const dispatch = useCreditCardFormActions();

  const handleCreditCardNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = e.target.value;
    dispatch({ type: 'SET_CREDIT_CARD_NAME', payload: name });
  };

  const handleConfirmButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: 카드 생성
    navigate(PAGE_ROUTES.CREDIT_CARD_LIST);
  };

  return (
    <BaseLayout>
      <Form onSubmit={handleConfirmButtonClick}>
        <Title>카드등록이 완료되었습니다.</Title>
        <CreditCardView
          creditCardCompanyName={creditCardCompany}
          creditCardNumber={creditCardNumber}
          creditCardExpirationDate={creditCardExpirationDate}
          creditCardOwnerName={creditCardOwnerName}
        />
        <Input
          type="text"
          placeholder="카드 이름을 입력해주세요."
          letterSpacing="small"
          onChange={handleCreditCardNameChange}
        />
        <ButtonWrapper>
          <ConfirmButton type="submit">확인</ConfirmButton>
        </ButtonWrapper>
      </Form>
    </BaseLayout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 4rem;

  input {
    margin-top: 6rem;
    width: 100%;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ConfirmButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
`;

export default CreditCardNamingPage;
