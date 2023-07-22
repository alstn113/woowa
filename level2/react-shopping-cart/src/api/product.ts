import { ClientResponse } from './Client';

import client from '.';

export interface ProductEntity {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

type GetProductListResponse = ClientResponse<200, ProductEntity[]>;

type GetProductResponse = ClientResponse<200, ProductEntity>;

type AddProductRequest = Omit<ProductEntity, 'id'>;
type AddProductResponse = ClientResponse<
  201,
  {
    location: `/products/${string}`;
  }
>;

type UpdateProductRequest = Omit<ProductEntity, 'id'>;
type UpdateProductResponse = ClientResponse<200>;

type DeleteProductResponse = ClientResponse<204>;

const ProductAPI = {
  /**
   * 상품 목록 조회
   */
  getProductList: async () => {
    const response = await client.get<GetProductListResponse>('/products');
    return response;
  },

  /**
   * 상품 조회
   */
  getProduct: async (productId: number) => {
    const response = await client.get<GetProductResponse>(
      `/products/${productId}`,
    );
    return response;
  },

  /**
   * 상품 추가
   */
  addProduct: async (body: AddProductRequest) => {
    const response = await client.post<AddProductResponse, AddProductRequest>(
      '/products',
      body,
    );

    return response;
  },

  /**
   * 상품 수정
   */
  updateProduct: async (productId: number, body: AddProductRequest) => {
    const response = await client.put<
      UpdateProductResponse,
      UpdateProductRequest
    >(`/products/${productId}`, body);

    return response;
  },

  /**
   * 상픔 삭제
   */
  deleteProduct: async (productId: number) => {
    const response = await client.delete<DeleteProductResponse>(
      `/products/${productId}`,
    );

    return response;
  },
};

export default ProductAPI;
