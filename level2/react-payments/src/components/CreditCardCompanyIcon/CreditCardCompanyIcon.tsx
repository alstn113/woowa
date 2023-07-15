import BC카드 from '../../assets/images/BC카드.png';
import 국민카드 from '../../assets/images/국민카드.png';
import 롯데카드 from '../../assets/images/롯데카드.png';
import 신한카드 from '../../assets/images/신한카드.png';
import 우리카드 from '../../assets/images/우리카드.png';
import 카카오뱅크 from '../../assets/images/카카오뱅크.png';
import 하나카드 from '../../assets/images/하나카드.png';
import 현대카드 from '../../assets/images/현대카드.png';
import { CreditCardCompany } from '../../types';

interface CreditCardCompanyIconProps {
  creditCardCompanyName: CreditCardCompany;
  size?: number;
}

const CreditCardCompanyIcon = ({
  creditCardCompanyName,
  size = 20,
}: CreditCardCompanyIconProps) => {
  const creditCardCompanyIconMap = {
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
    <img
      width={`${size}px`}
      height={`${size}px`}
      src={creditCardCompanyIconMap[creditCardCompanyName]}
      alt={creditCardCompanyName}
    />
  );
};

export default CreditCardCompanyIcon;
