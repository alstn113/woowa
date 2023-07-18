import Client from './Client';
import { ShoppingCartAPI } from './ShoppingCartAPI';
import { BASE_URL } from '../constants';

const client = new Client<ShoppingCartAPI>({
  baseURL: BASE_URL,
});

const test = async () => {
  const a = await client
    .get({
      path: '/products/:productId',
      params: {
        productId: '1',
      },
    })
    .acceptOkOrThrow();
};

const test2 = async () => {
  const response = await client.get({
    path: '/products',
  });

  return response;
};

const test3 = async () => {
  const response = await client.post({
    path: '/products',
    body: {
      name: 'test',
      price: 1000,
      imageUrl: 'https://test.com',
    },
  });

  return response;
};

export default client;
