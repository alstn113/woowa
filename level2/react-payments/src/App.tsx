import { RouterProvider } from 'react-router-dom';

import AppProvider from './AppProvider';
import router from './routes';

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
