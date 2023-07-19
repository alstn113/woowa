import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { worker } from './mocks/browser.ts';

if (process.env.NODE_ENV === 'development') {
  void worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
