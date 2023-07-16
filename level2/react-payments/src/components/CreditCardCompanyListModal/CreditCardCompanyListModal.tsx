import { useNavigate } from 'react-router-dom';

import * as S from './CreidtCardCompanyListModal.styles';
import { PAGE_ROUTES } from '../../constants';
import { CREDIT_CARD_COMPANY } from '../../constants/creditCard';
import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useModalAcitons from '../../hooks/modal/useModalAcitons';
import { CreditCardCompany } from '../../types';
import CreditCardCompanyIcon from '../CreditCardCompanyIcon/CreditCardCompanyIcon';

const CreditCardCompanyListModal = () => {
  const navigate = useNavigate();
  const modalDispatch = useModalAcitons();
  const creditCardFormDispatch = useCreditCardFormActions();

  const handleClick = (cardName: CreditCardCompany) => {
    creditCardFormDispatch({
      type: 'SET_CREDIT_CARD_COMPANY',
      payload: cardName,
    });
    modalDispatch({ type: 'CLOSE_MODAL' });
    navigate(PAGE_ROUTES.CREDIT_CARD_CREATE);
  };

  return (
    <S.Container>
      <S.IconWrapper>
        {CREDIT_CARD_COMPANY.map((creditCardCompany: CreditCardCompany) => (
          <S.IconButton
            key={creditCardCompany}
            onClick={() => handleClick(creditCardCompany)}
          >
            <CreditCardCompanyIcon
              creditCardCompanyName={creditCardCompany}
              size={40}
            />
            <S.IconLabel>{creditCardCompany}</S.IconLabel>
          </S.IconButton>
        ))}
      </S.IconWrapper>
    </S.Container>
  );
};

export default CreditCardCompanyListModal;
