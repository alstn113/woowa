import { Route, Routes } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ProductListPage from './pages/ProductListPage';
import OrderListPage from './pages/OrderListPage';
import OrderDetailPage from './pages/OrderDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} errorElement={<NotFoundPage />}>
        <Route index element={<ProductListPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="orders">
          <Route index element={<OrderListPage />} />
          <Route path=":orderId" element={<OrderDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PageRoutes;
