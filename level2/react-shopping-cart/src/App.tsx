import { RouterProvider } from 'react-router-dom';
import router from './router';
import { RecoilRoot } from 'recoil';
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
