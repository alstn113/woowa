import useModalAcitons from './modal/useModalAcitons';
import CreditCardCompanyListModal from '../components/CreditCardCompanyListModal/CreditCardCompanyListModal';

const useOpenCreditCardCompanyListModal = () => {
  const dispatch = useModalAcitons();

  return () =>
    dispatch({
      type: 'OPEN_MODAL',
      payload: <CreditCardCompanyListModal />,
    });
};

export default useOpenCreditCardCompanyListModal;
