import { createBrowserRouter } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import RootErrorBoundary from './pages/RootErrorBoundary';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: '',
        element: <ProductListPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
