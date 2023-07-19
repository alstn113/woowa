import { rest } from 'msw';

import cartItem from '../fixtures/cartItem';

export const cartHandlers = [
  rest.get('/cart-items', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartItem));
  }),
];
