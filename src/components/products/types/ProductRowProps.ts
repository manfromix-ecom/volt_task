import { Product } from '../../../models/Product';

export interface ProductRowProps {
  product: Product;
  deleteProductRequest: (product: Product) => void;
}
