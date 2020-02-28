import { AxiosResponse } from 'axios';
import { Product } from 'MyModels';
import { apiClient } from './api-client';

const mapToModel = ({ data }: AxiosResponse<any[]>): Product[] =>
  data.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
  }));

export const productsAPI = {
  index(): Promise<Product[]> {
    return apiClient.get('products/').then((response) => {
      return mapToModel(response);
    });
  },
  show(product: Product) {
    const { id } = product;
    return apiClient.get(`products/${id}`);
  },
  create(product: Product) {
    const { name, price } = product;
    return apiClient.post('products', { name, price });
  },
  update(product: Product) {
    const { id, name, price } = product;
    return apiClient.put(`products/${id}`, { name, price });
  },
  delete(product: Product) {
    const { id } = product;
    return apiClient.delete(`products/${id}`, {}).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  },
};
