import { productHandlers } from './product';
import { cartItemsHandlers } from './cartItems';

export const handlers = [...cartItemsHandlers, ...productHandlers];
