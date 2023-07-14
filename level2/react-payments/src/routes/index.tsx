import { createBrowserRouter } from 'react-router-dom';

import CardCreationPage from '../pages/CardCreationPage/CardCreationPage';
import CardListPage from '../pages/CardListPage/CardListPage';
import CardNamingPage from '../pages/CardNamingPage/CardNamingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardListPage />,
  },
  {
    path: '/card',
    children: [
      {
        path: 'create',
        element: <CardCreationPage />,
      },
      {
        path: 'naming',
        element: <CardNamingPage />,
      },
    ],
  },
]);

export default router;
