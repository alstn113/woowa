import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import router from './router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
