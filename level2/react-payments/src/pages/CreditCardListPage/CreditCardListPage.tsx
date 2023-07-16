import CreditCardCreateButton from '../../components/CreditCardCreateButton/CreditCardCreateButton';
import CreditCardList from '../../components/CreditCardList/CreditCardList';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import useCreditCardList from '../../hooks/useCreditCardList';

const CreditCardListPage = () => {
  const { creditCardList } = useCreditCardList();

  return (
    <BaseLayout title="보유 카드">
      <CreditCardCreateButton message="새로운 카드를 등록해주세요." />
      <CreditCardList creditCardList={creditCardList} />
    </BaseLayout>
  );
};

export default CreditCardListPage;
