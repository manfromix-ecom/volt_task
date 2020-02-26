import { Product } from 'MyModels';

export interface ProductRowProps {
  product: Product;
  deleteProductRequest: (product: Product) => void;
  hideModal: () => void;
}
