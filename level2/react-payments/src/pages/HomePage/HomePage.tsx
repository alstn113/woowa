import { useEffect, useState } from 'react';

import InputNumber from '../../components/common/InputNumber/InputNumber';
import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const HomePage = () => {
  const [value, setValue] = useState<number[]>([]);

  const handleChange = (value: number[]) => {
    setValue(value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <BaseLayout title="보유 카드">
      <InputNumber value={value} onChange={handleChange}>
        <InputNumber.Field />
        <InputNumber.Field maxLength={2} />
        <InputNumber.Field maxLength={1} />
        <InputNumber.Field maxLength={3} />
      </InputNumber>
    </BaseLayout>
  );
};

export default HomePage;
