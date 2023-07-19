import { ClientResponse } from './Client';

import client from '.';

interface ProductResponse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

type ProductListResponse = ProductResponse[];

type GetProductsResponse = ClientResponse<200, ProductListResponse>;

type GetProductResponse = ClientResponse<200, ProductResponse>;

type AddProductResponse = ClientResponse<
  201,
  {
    Location: `/products/${string}`;
  }
>;

type AddProductRequest = Omit<ProductResponse, 'id'>;

const ProductAPI = {
  /**
   * 상품 목록 조회
   */
  async getProducts() {
    const response = await client.get<GetProductsResponse>('/products');
    return response;
  },

  /**
   * 상품 조회
   */
  async getProduct(productId: number) {
    const response = await client.get<GetProductResponse>(
      `/products/${productId}`,
    );
    return response;
  },

  /**
   * 상품 추가
   */
  async addProduct(body: AddProductRequest) {
    const response = await client.post<AddProductResponse, AddProductRequest>(
      '/products',
      body,
    );

    return response;
  },
};

export default ProductAPI;
