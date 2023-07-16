import CreditCardCreateButton from '../../components/CreditCardCreateButton/CreditCardCreateButton';
import CreditCardList from '../../components/CreditCardList/CreditCardList';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import useCreditCardList from '../../hooks/useCreditCardList';

const CreditCardListPage = () => {
  const { creditCardList } = useCreditCardList();
  const isEmpty = creditCardList.length === 0;

  return (
    <BaseLayout title="보유 카드">
      <CreditCardList creditCardList={creditCardList} />
      <CreditCardCreateButton
        {...(isEmpty && { message: '새로운 카드를 등록해주세요.' })}
      />
    </BaseLayout>
  );
};

export default CreditCardListPage;
