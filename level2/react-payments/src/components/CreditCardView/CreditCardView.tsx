import styled from '@emotion/styled';

import BC카드 from '../../assets/images/BC카드.png';
import 국민카드 from '../../assets/images/국민카드.png';
import 롯데카드 from '../../assets/images/롯데카드.png';
import 신한카드 from '../../assets/images/신한카드.png';
import 우리카드 from '../../assets/images/우리카드.png';
import 카카오뱅크 from '../../assets/images/카카오뱅크.png';
import 하나카드 from '../../assets/images/하나카드.png';
import 현대카드 from '../../assets/images/현대카드.png';
import { SpaceBetween } from '../../styles/shared';
import type {
  CreditCardCompany,
  CreditCardExpirationDate,
  CreditCardNumber,
  CreditCardOwnerName,
} from '../../types';

interface CreditCardCompanyNameProps {
  creditCardCompanyName: CreditCardCompany;
  creditCardNumber?: CreditCardNumber;
  creditCardOwnerName?: CreditCardOwnerName;
  creditCardExpirationDate?: CreditCardExpirationDate;
}

const CreditCardView = ({
  creditCardCompanyName = 'BC카드',
  creditCardNumber = ['', '', '', ''],
  creditCardExpirationDate = [0, 0],
  creditCardOwnerName = '',
}: CreditCardCompanyNameProps) => {
  const cardIcon = {
    BC카드: BC카드,
    국민카드: 국민카드,
    롯데카드: 롯데카드,
    신한카드: 신한카드,
    우리카드: 우리카드,
    카카오뱅크: 카카오뱅크,
    하나카드: 하나카드,
    현대카드: 현대카드,
  } satisfies Record<CreditCardCompany, string>;

  return (
    <CreditCardWrapper>
      <SpaceBetween>
        <CreidtCardCompanyName>{creditCardCompanyName}</CreidtCardCompanyName>
        <CreditCardCompanyIcon
          src={cardIcon[creditCardCompanyName]}
          alt={creditCardCompanyName}
        />
      </SpaceBetween>
      <GoldChip />
      <CreditCardNumberWrapper>
        <div>{creditCardNumber[0]}</div>
        <div>{creditCardNumber[1]}</div>
        <div>{'•'.repeat(creditCardNumber[2].length)}</div>
        <div>{'•'.repeat(creditCardNumber[3].length)}</div>
      </CreditCardNumberWrapper>
      <SpaceBetween>
        <CreditCardOwnerNameWrapper>
          {creditCardOwnerName}
        </CreditCardOwnerNameWrapper>
        <CreditCardExpirationDateWrapper>
          {creditCardExpirationDate[0]}/{creditCardExpirationDate[1]}
        </CreditCardExpirationDateWrapper>
      </SpaceBetween>
    </CreditCardWrapper>
  );
};

const CreditCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 140px;
  width: 220px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
`;

const CreidtCardCompanyName = styled.span``;
const CreditCardCompanyIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const GoldChip = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 5px;
  background-color: #d6bc2a;
`;

const CreditCardNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    flex: 1;
  }
`;
const CreditCardOwnerNameWrapper = styled.span``;
const CreditCardExpirationDateWrapper = styled.span``;

export default CreditCardView;
