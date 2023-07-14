import CreditCardCVCInput from '../../components/CreditCardForm/CreditCardCVCInput';
import CreditCardExpirationDateInput from '../../components/CreditCardForm/CreditCardExpirationDateInput';
import CreditCardNumberInput from '../../components/CreditCardForm/CreditCardNumberInput';
import CreditCardOwnerNameInput from '../../components/CreditCardForm/CreditCardOwnerNameInput';
import CreditCardPasswordInput from '../../components/CreditCardForm/CreditCardPasswordInput';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const CreditCardCreationPage = () => {
  return (
    <BaseLayout title="카드 추가" withBackButton>
      <div>카드 표시</div>
      <form>
        <CreditCardNumberInput />
        <CreditCardExpirationDateInput />
        <CreditCardOwnerNameInput />
        <CreditCardCVCInput />
        <CreditCardPasswordInput />
      </form>
    </BaseLayout>
  );
};

export default CreditCardCreationPage;
