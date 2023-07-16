import * as S from './CreditCardCreationButton.styles';
import useOpenCreditCardCompanyListModal from '../../hooks/useOpenCreditCardCompanyListModal';

interface CreditCardCreationButtonProps {
  message?: string;
}

const CreditCardCreationButton = ({
  message,
}: CreditCardCreationButtonProps) => {
  const openModal = useOpenCreditCardCompanyListModal();

  const handleClick = () => {
    openModal();
  };

  return (
    <S.Container>
      {message && <S.Message>{message}</S.Message>}
      <S.StyledCreditCardCreationButton onClick={handleClick}>
        +
      </S.StyledCreditCardCreationButton>
    </S.Container>
  );
};

export default CreditCardCreationButton;
