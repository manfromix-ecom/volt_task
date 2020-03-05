/* eslint no-console: off */
import { AxiosResponse } from 'axios';
import { apiClient } from '../apiClient';
import { apiProduct, Product } from '../../models/Product';

const mapToModel = ({ data }: AxiosResponse<Array<apiProduct>>): Array<Product> =>
  data.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
  }));

export const productsAPI = {
  index(): Promise<Array<Product>> {
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
      console.log(error);
    });
  },
};
