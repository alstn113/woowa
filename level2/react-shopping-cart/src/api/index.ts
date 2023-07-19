import Client from './Client';
import { BASE_URL } from '../constants';

const client = new Client({
  baseURL: BASE_URL,
});

export default client;
