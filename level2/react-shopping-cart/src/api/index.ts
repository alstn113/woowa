import Client from './Client';
import { ShoppingCartAPI } from './ShoppingCartAPI';
import { BASE_URL } from '../constants';

const client = new Client<ShoppingCartAPI>({
  baseURL: BASE_URL,
});

const test = async () => {
  const response = await client.get({
    path: '/products/:productId',
    params: {
      productId: '1',
    },
  });

  return response;
};

const test2 = async () => {
  const response = await client.get({
    path: '/products',
  });

  return response;
};

export default client;
