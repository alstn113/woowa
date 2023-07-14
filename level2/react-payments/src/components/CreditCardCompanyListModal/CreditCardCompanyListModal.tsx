import { useNavigate } from 'react-router-dom';

import * as S from './CreidtCardCompanyListModal.styles';
import { CREDIT_CARD_COMPANY } from '../../constants';
import useModalAcitons from '../../hooks/modal/useModalAcitons';

const CreditCardCompanyListModal = () => {
  const navigate = useNavigate();
  const dispatch = useModalAcitons();

  const handleClick = () => {
    navigate(`/credit-card/create`);
    dispatch({ type: 'CLOSE_MODAL' });
    r;
  };

  return (
    <S.Container>
      {CREDIT_CARD_COMPANY.map((company) => (
        <div key={company}>
          <img src="" alt="" />
          <button onClick={handleClick}>{company}</button>
        </div>
      ))}
    </S.Container>
  );
};

export default CreditCardCompanyListModal;
