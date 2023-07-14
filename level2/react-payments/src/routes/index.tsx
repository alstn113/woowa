import { createBrowserRouter } from 'react-router-dom';

import CreditCardCreationPage from '../pages/CreditCardCreationPage/CreditCardCreationPage';
import CreditCardListPage from '../pages/CreditCardListPage/CreditCardListPage';
import CreditCardNamingPage from '../pages/CreditCreditCardNamingPage/CreditCardNamingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreditCardListPage />,
  },
  {
    path: '/credit-card',
    children: [
      {
        path: 'create',
        element: <CreditCardCreationPage />,
      },
      {
        path: 'naming',
        element: <CreditCardNamingPage />,
      },
    ],
  },
]);

export default router;
