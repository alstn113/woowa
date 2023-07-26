import { Route, Routes } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductListPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
