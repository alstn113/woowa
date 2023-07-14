import { useNavigate } from 'react-router-dom';

import * as S from './CreidtCardCompanyListModal.styles';
import { CREDIT_CARD_COMPANY } from '../../constants';
import useModalAcitons from '../../hooks/modal/useModalAcitons';

// import 국민카드 from '../../assets/images/국민카드.png';
// import 롯데카드 from '../../assets/images/롯데카드.png';
// import 현대카드 from '../../assets/images/현대카드.png';
// import 신한카드 from '../../assets/images/신한카드.png';
// import 우리카드 from '../../assets/images/우리카드.png';
// import 카카오뱅크 from '../../assets/images/카카오뱅크.png';
// import 하나카드 from '../../assets/images/하나카드.png';
// import BC카드 from '../../assets/images/BC카드.png';

const CreditCardCompanyListModal = () => {
  const navigate = useNavigate();
  const dispatch = useModalAcitons();

  const handleClick = () => {
    navigate(`/credit-card/create`);
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <S.Container>
      {CREDIT_CARD_COMPANY.map((company) => (
        <div key={company}>
          <button onClick={handleClick}>{company}</button>
        </div>
      ))}
    </S.Container>
  );
};

export default CreditCardCompanyListModal;
