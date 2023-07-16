import * as S from './CreditCardList.styles';
import { CreditCard } from '../../types';
import CreditCardView from '../CreditCardView/CreditCardView';

interface CreditCardListProps {
  creditCardList: CreditCard[];
}

const CreditCardList = ({ creditCardList }: CreditCardListProps) => {
  return (
    <S.ListContainer>
      {creditCardList.map((creditCard, index) => {
        const {
          creditCardCompany,
          creditCardExpirationDate,
          creditCardOwnerName,
          creditCardNumber,
          creditCardName,
        } = creditCard;

        return (
          <S.ItemContainer key={index}>
            <CreditCardView
              creditCardCompany={creditCardCompany}
              creditCardExpirationDate={creditCardExpirationDate}
              creditCardNumber={creditCardNumber}
              creditCardOwnerName={creditCardOwnerName}
            />
            <S.CardName>{creditCardName}</S.CardName>
          </S.ItemContainer>
        );
      })}
    </S.ListContainer>
  );
};

export default CreditCardList;
