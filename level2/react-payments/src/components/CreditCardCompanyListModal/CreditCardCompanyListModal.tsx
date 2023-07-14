import { useNavigate } from 'react-router-dom';

import { CREDIT_CARD_COMPANY } from '../../constants';

const CreditCardCompanyListModal = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/credit-card/create`);
  };

  return (
    <div>
      {CREDIT_CARD_COMPANY.map((company) => (
        <div key={company}>
          <img src="" alt="" />
          <button onClick={handleClick}>{company}</button>
        </div>
      ))}
    </div>
  );
};

export default CreditCardCompanyListModal;
