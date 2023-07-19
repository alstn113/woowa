import Client from './Client';
import { BASE_URL } from '../constants';

const client = new Client({
  baseURL: BASE_URL,
});

interface ProductResponse {
  id: number;
  name: string;
  price: number;
}

const test = async () => {
  const { data } = await client.get<ProductResponse[]>('/products');
  return data;
};
