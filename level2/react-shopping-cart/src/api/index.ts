import Client from './Client';
import { BASE_URL } from '../constants';

const clientInstance = new Client({
  baseURL: BASE_URL,
});

export default clientInstance;
