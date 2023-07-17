import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from './components/layouts/BaseLayout';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

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
