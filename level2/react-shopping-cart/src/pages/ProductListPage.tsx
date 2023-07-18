import { useState } from 'react';

import Checkbox from '../components/common/Checkbox';

const ProductListPage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };
  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} />
      <div>{checked ? 'true' : 'false'}</div>
    </div>
  );
};

export default ProductListPage;
