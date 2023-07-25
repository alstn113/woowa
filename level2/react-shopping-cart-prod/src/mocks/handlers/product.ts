import { rest } from 'msw';

import products from '../fixtures/products';

export const productHandlers = [
  rest.get('/products', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.get('/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;

    const product = products.find(
      (product) => product.id === Number(productId),
    );

    if (!product) {
      return res(
        ctx.delay(),
        ctx.status(404),
        ctx.json({
          message: '상품 정보를 찾을 수 없습니다.',
        }),
      );
    }

    return res(ctx.status(200), ctx.json(product));
  }),
];
