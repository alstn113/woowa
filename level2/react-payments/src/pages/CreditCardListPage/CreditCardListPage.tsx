import CreditCardCreationButton from '../../components/CreditCardCreationButton/CreditCardCreationButton';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const CreditCardListPage = () => {
  return (
    <BaseLayout title="보유 카드">
      <CreditCardCreationButton message="새로운 카드를 등록해주세요." />
    </BaseLayout>
  );
};

export default CreditCardListPage;
