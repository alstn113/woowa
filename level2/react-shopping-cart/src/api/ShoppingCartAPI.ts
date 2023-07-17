import { HttpRequest, HttpResponse } from './Http';

interface ProductResponse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export type ShoppingCartAPI =
  | {
      request: HttpRequest<'get', '/products'>;
      response: HttpResponse<200, ProductResponse[]>;
    }
  | {
      request: HttpRequest<'get', '/products/:productId'>;
      response: HttpResponse<200, ProductResponse> | HttpResponse<404>;
    };
