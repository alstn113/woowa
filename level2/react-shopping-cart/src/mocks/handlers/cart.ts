import { rest } from 'msw';

export const cartHandler = [rest.get('/cart', (req, res) => {})];
