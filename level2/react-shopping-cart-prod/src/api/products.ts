import apiClient from './apiClient';

export interface ProductEntity {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

type GetProductListResult = ProductEntity[];
type GetProductResult = ProductEntity;
type AddProductParams = Omit<ProductEntity, 'id'>;
type AddProductResult = {
  headers: {
    location: `/products/${string}`;
  };
};
type UpdateProductParams = AddProductParams;

const ProductsAPI = {
  getProductList: async () => {
    const response = await apiClient.get<GetProductListResult>('/products');

    return response.data;
  },

  getProduct: async (productId: number) => {
    const response = await apiClient.get<GetProductResult>(
      `/products/${productId}`,
    );

    return response.data;
  },

  addProduct: async (params: AddProductParams) => {
    const response = await apiClient.post<
      Record<string, never>,
      AddProductResult
    >('/products', params);

    return response.headers.location;
  },

  updateProduct: async (productId: number, params: UpdateProductParams) => {
    await apiClient.put(`/products/${productId}`, params);
  },

  deleteProduct: async (productId: number) => {
    await apiClient.delete(`/products/${productId}`);
  },
};

export default ProductsAPI;
