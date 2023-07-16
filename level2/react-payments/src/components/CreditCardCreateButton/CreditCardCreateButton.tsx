import * as S from './CreditCardCreateButton.styles';
import useOpenCreditCardCompanyListModal from '../../hooks/useOpenCreditCardCompanyListModal';

interface CreditCardCreateButtonProps {
  message?: string;
}

const CreditCardCreateButton = ({ message }: CreditCardCreateButtonProps) => {
  const openModal = useOpenCreditCardCompanyListModal();

  const handleClick = () => {
    openModal();
  };

  return (
    <S.Container>
      {message && <S.Message>{message}</S.Message>}
      <S.StyledCreditCardCreateButton onClick={handleClick}>
        +
      </S.StyledCreditCardCreateButton>
    </S.Container>
  );
};

export default CreditCardCreateButton;
