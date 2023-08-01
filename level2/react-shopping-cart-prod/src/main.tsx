import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyle from './styles/GlobalStyle';
import { worker } from './mocks/browser';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>,
);
