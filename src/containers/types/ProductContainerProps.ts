import { Product } from 'MyModels';

export interface ProductContainerProps {
  product: Product;
  setProduct: (product: Product) => void;
}