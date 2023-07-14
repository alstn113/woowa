import InputNumber from '../../components/common/InputNumber/InputNumber';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const HomePage = () => {
  return (
    <BaseLayout title="보유 카드">
      <InputNumber>
        <InputNumber.Field />
        <InputNumber.Field maxLength={2} />
        <InputNumber.Field maxLength={1} />
        <InputNumber.Field maxLength={3} />
      </InputNumber>
    </BaseLayout>
  );
};

export default HomePage;
