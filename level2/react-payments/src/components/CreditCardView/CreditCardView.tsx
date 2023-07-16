import styled from '@emotion/styled';

import { CREDIT_CARD_COMPANY_COLOR } from '../../constants/creditCard';
import { SpaceBetween } from '../../styles/shared';
import type {
  CreditCardCompany,
  CreditCardExpirationDate,
  CreditCardNumber,
  CreditCardOwnerName,
} from '../../types';
import CreditCardCompanyIcon from '../CreditCardCompanyIcon/CreditCardCompanyIcon';

interface CreditCardCompanyNameProps {
  creditCardCompanyName: CreditCardCompany;
  creditCardNumber?: CreditCardNumber;
  creditCardOwnerName?: CreditCardOwnerName;
  creditCardExpirationDate?: CreditCardExpirationDate;
}

const CreditCardView = ({
  creditCardCompanyName = '카카오뱅크',
  creditCardNumber = '',
  creditCardExpirationDate = ['', ''],
  creditCardOwnerName = '',
}: CreditCardCompanyNameProps) => {
  const cardBackground =
    CREDIT_CARD_COMPANY_COLOR[creditCardCompanyName].background;
  const cardColor = CREDIT_CARD_COMPANY_COLOR[creditCardCompanyName].color;

  const creditCardNumberParts = [0, 1, 2, 3].map((index) => {
    const part = creditCardNumber.split('-')[index] ?? '';
    return part;
  });

  return (
    <CreditCardWrapper cardBackground={cardBackground} cardColor={cardColor}>
      <NameIconSpaceBetween>
        <CreidtCardCompanyName>{creditCardCompanyName}</CreidtCardCompanyName>
        <CreditCardCompanyIcon
          creditCardCompanyName={creditCardCompanyName}
          size={30}
        />
      </NameIconSpaceBetween>
      <GoldChip />
      <CreditCardNumberWrapper>
        <div>{creditCardNumberParts[0]}</div>
        <div>{creditCardNumberParts[1]}</div>
        <div>
          {Array.from({ length: creditCardNumberParts[2].length }, (_, i) => (
            <CreditCardNumberMasking cardColor={cardColor} key={i} />
          ))}
        </div>
        <div>
          {Array.from({ length: creditCardNumberParts[3].length }, (_, i) => (
            <CreditCardNumberMasking cardColor={cardColor} key={i} />
          ))}
        </div>
      </CreditCardNumberWrapper>
      <OwnerNameExpirationDateSpaceBetween gap={1}>
        <CreditCardOwnerNameWrapper>
          {creditCardOwnerName}
        </CreditCardOwnerNameWrapper>
        <CreditCardExpirationDateWrapper>
          {creditCardExpirationDate[0]}
          {creditCardExpirationDate.some(Boolean) && ' / '}
          {creditCardExpirationDate[1]}
        </CreditCardExpirationDateWrapper>
      </OwnerNameExpirationDateSpaceBetween>
    </CreditCardWrapper>
  );
};

const CreditCardWrapper = styled.div<{
  cardBackground: string;
  cardColor: string;
}>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 140px;
  width: 220px;
  padding: 15px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
  background-color: ${({ cardBackground }) => cardBackground};
  color: ${({ cardColor }) => cardColor};
`;

const NameIconSpaceBetween = styled(SpaceBetween)`
  align-items: flex-start;
`;

const CreidtCardCompanyName = styled.span``;

const GoldChip = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 5px;
  background-color: #d6bc2a;
  margin-bottom: 10px;
`;

const CreditCardNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    letter-spacing: 2px;
  }
`;

const CreditCardNumberMasking = styled.div<{ cardColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ cardColor }) => cardColor};
  & + & {
    margin-left: 6px;
  }
`;

const OwnerNameExpirationDateSpaceBetween = styled(SpaceBetween)`
  margin-top: 10px;
  height: 16px;
`;

const CreditCardOwnerNameWrapper = styled.span`
  flex: 1 1 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CreditCardExpirationDateWrapper = styled.span``;

export default CreditCardView;
