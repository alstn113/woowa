import { setupWorker } from 'msw';

import { BASE_URL } from '../constants';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);

worker.start({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: `${BASE_URL}/mockServiceWorker.js`,
  },
});
