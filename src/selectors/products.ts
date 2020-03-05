import Types from 'MyTypes';
import { Product } from '../models/Product';

export const getProduct = (state: Types.RootState, id: number) => {
  const productsFiltered = state.products.filter((curProduct: Product) => curProduct.id === id);
  return productsFiltered.length ? productsFiltered[0] : {};
};
