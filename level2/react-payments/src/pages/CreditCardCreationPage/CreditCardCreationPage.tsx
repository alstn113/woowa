import CreditCardExpirationDateInput from '../../components/CreditCardForm/CreditCardExpirationDateInput';
import CreditCardNumberInput from '../../components/CreditCardForm/CreditCardNumberInput';
import CreditCardOwnerNameInput from '../../components/CreditCardForm/CreditCardOwnerNameInput';
import CreditCardPasswordInput from '../../components/CreditCardForm/CreditCardPasswordInput';
import CreditCardSecurityCodeInput from '../../components/CreditCardForm/CreditCardSecurityCodeInput';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const CreditCardCreationPage = () => {
  return (
    <BaseLayout title="카드 추가" withBackButton>
      <div>카드 표시</div>
      <div>
        <CreditCardNumberInput />
        <CreditCardExpirationDateInput />
        <CreditCardOwnerNameInput />
        <CreditCardSecurityCodeInput />
        <CreditCardPasswordInput />
      </div>
    </BaseLayout>
  );
};

export default CreditCardCreationPage;
