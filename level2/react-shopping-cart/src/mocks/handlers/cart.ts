import { rest } from 'msw';

import cartItems from '../fixtures/cartItems';
import products from '../fixtures/products';

export const cartHandlers = [
  rest.get('/cart-items', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartItems));
  }),

  rest.post('/cart-items', async (req, res, ctx) => {
    const { productId } = await req.json();

    const isProductInCart = cartItems.find(
      (item) => item.product.id === Number(productId),
    );

    if (isProductInCart)
      return res(
        ctx.status(409),
        ctx.json({ message: '이미 장바구니에 존재하는 상품입니다.' }),
      );

    const product = products.find(
      (product) => product.id === Number(productId),
    );
    if (!product)
      return res(
        ctx.status(404),
        ctx.json({ message: '존재하지 않는 상품입니다.' }),
      );

    const newId = Math.max(...cartItems.map((item) => item.id)) + 1;

    cartItems.push({
      id: newId,
      quantity: 1,
      product,
    });
    return res(ctx.status(201), ctx.set('location', `/cart-items/${newId}`));
  }),

  rest.patch('/cart-items/:cartItemId', async (req, res, ctx) => {
    const { cartItemId } = req.params;
    const { quantity } = await req.json();

    const cartItem = cartItems.find((item) => item.id === Number(cartItemId));
    if (!cartItem)
      return res(
        ctx.status(404),
        ctx.json({ message: '존재하지 않는 장바구니 아이템입니다.' }),
      );

    cartItem.quantity = quantity;
    return res(ctx.status(200));
  }),

  rest.delete('/cart-items/:cartItemId', async (req, res, ctx) => {
    const { cartItemId } = req.params;

    const cartItemIndex = cartItems.findIndex(
      (item) => item.id === Number(cartItemId),
    );

    if (cartItemIndex === -1)
      return res(
        ctx.status(404),
        ctx.json({ message: '존재하지 않는 장바구니 아이템입니다.' }),
      );

    cartItems.splice(cartItemIndex, 1);
    return res(ctx.status(204));
  }),
];
