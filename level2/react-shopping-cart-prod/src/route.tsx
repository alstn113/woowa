import { Route, Routes } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import RootErrorBoundary from './pages/RootErrorBoundary';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

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
