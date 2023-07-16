import CreditCardCreateButton from '../../components/CreditCardCreateButton/CreditCardCreateButton';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const CreditCardListPage = () => {
  return (
    <BaseLayout title="보유 카드">
      <CreditCardCreateButton message="새로운 카드를 등록해주세요." />
    </BaseLayout>
  );
};

export default CreditCardListPage;
