import apiClient from './apiClient';

export interface ProductEntity {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

type GetProductsResult = ProductEntity[];
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
    const response = await apiClient.get<GetProductsResult>('/products');

    return response;
  },

  getProduct: async (productId: number) => {
    const response = await apiClient.get<GetProductResult>(
      `/products/${productId}`,
    );

    return response;
  },

  addProduct: async (params: AddProductParams) => {
    const response = await apiClient.post<never, AddProductResult>(
      '/products',
      params,
    );

    return response;
  },

  updateProduct: async (productId: number, params: UpdateProductParams) => {
    const response = await apiClient.put(`/products/${productId}`, params);

    return response;
  },

  deleteProduct: async (productId: number) => {
    const response = await apiClient.delete(`/products/${productId}`);

    return response;
  },
};

export default ProductsAPI;
