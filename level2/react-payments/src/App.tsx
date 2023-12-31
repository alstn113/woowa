import { Route, Routes } from 'react-router-dom';

import { PAGE_ROUTES } from './constants';
import CreditCardCreatePage from './pages/CreditCardCreatePage/CreditCardCreatePage';
import CreditCardListPage from './pages/CreditCardListPage/CreditCardListPage';
import CreditCardNamingPage from './pages/CreditCreditCardNamingPage/CreditCardNamingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route
        path={PAGE_ROUTES.CREDIT_CARD_LIST}
        element={<CreditCardListPage />}
      />
      <Route
        path={PAGE_ROUTES.CREDIT_CARD_CREATE}
        element={<CreditCardCreatePage />}
      />
      <Route
        path={PAGE_ROUTES.CREDIT_CARD_NAMING}
        element={<CreditCardNamingPage />}
      />
      <Route path={PAGE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
