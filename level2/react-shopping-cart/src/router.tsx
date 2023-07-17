import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from './components/layouts/BaseLayout';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
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
