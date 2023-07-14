import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import useOpenCreditCardCompanyListModal from '../../hooks/useOpenCreditCardCompanyListModal';

const CardListPage = () => {
  const openModal = useOpenCreditCardCompanyListModal();

  return (
    <BaseLayout title="보유 카드">
      <div>
        <button onClick={openModal}>모달 오픈</button>
      </div>
    </BaseLayout>
  );
};

export default CardListPage;
