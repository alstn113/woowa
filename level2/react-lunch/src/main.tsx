import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';
import RestaurantProvider from './contexts/RestaurantProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RestaurantProvider>
    <GlobalStyle />
    <App />
  </RestaurantProvider>,
);
