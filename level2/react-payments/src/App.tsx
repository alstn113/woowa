import { Route, Routes } from 'react-router-dom';

import { PAGE_ROUTES } from './constants';
import CardCreationPage from './pages/CardCreationPage/CardCreationPage';
import CardListPage from './pages/CardListPage/CardListPage';
import CardNamingPage from './pages/CardNamingPage/CardNamingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path={PAGE_ROUTES.CREDIT_CARD_LIST} element={<CardListPage />} />
      <Route
        path={PAGE_ROUTES.CREDIT_CARD.CREATE}
        element={<CardCreationPage />}
      />
      <Route
        path={PAGE_ROUTES.CREDIT_CARD.NAMING}
        element={<CardNamingPage />}
      />
      <Route path={PAGE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
