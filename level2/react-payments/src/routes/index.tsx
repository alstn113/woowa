import { createBrowserRouter } from 'react-router-dom';

import CardCreationPage from '../pages/CardCreationPage/CardCreationPage';
import CardNamingPage from '../pages/CardNamingPage/CardNamingPage';
import HomePage from '../pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card',
    children: [
      {
        path: '/create',
        element: <CardCreationPage />,
      },
      {
        path: '/naming',
        element: <CardNamingPage />,
      },
    ],
  },
]);

export default router;
