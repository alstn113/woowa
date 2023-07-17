import { HttpRequest, HttpResponse } from './Http';

interface ProductResponse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

type ProductAddRequest = Omit<ProductResponse, 'id'>;

export type ShoppingCartAPI =
  | {
      request: HttpRequest<'get', '/products'>;
      response: HttpResponse<200, ProductResponse[]>;
    }
  | {
      request: HttpRequest<'get', '/products/:productId'>;
      response: HttpResponse<200, ProductResponse> | HttpResponse<404>;
    }
  | {
      request: HttpRequest<'post', '/products', never, ProductAddRequest>;
      response: HttpResponse<201, never, { Location: string }>;
    };
