import { Product } from 'MyModels';

export interface ProductRowProps {
  product: Product;
  hideModal: () => void;
}
