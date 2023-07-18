import Client from './Client';
import { ShoppingCartAPI } from './ShoppingCartAPI';
import { BASE_URL } from '../constants';

const client = new Client<ShoppingCartAPI>({
  baseURL: BASE_URL,
});

const test = async () => {
  const a = await client
    .get('/products/:productId', {
      productId: '1',
    })
    .acceptOkOrThrow();
};

const test2 = async () => {
  const response = await client.get('/products', null).acceptOkOrThrow();
};

const test3 = async () => {
  const response = await client
    .post('/products', null, {
      name: 'test',
      price: 1000,
      imageUrl: 'https://test.com',
    })
    .acceptOrThrow(201);
};

const test4 = async () => {
  const response = await client
    .patch(
      '/cart-items/:cartItemId',
      {
        cartItemId: '1',
      },
      {
        quantity: 10,
      },
    )
    .acceptOkOrThrow();
};

export default client;
