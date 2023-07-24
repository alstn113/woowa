import { Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import RootErrorBoundary from './pages/RootErrorBoundary';
import RootLayout from './pages/RootLayout';

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<RootErrorBoundary />}
      >
        <Route index element={<ProductListPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
