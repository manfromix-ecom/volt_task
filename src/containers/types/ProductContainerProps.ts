import { Product } from 'MyModels';

export interface ProductContainerProps {
  product: Product;
  setProduct: (product: Product, id: number | undefined) => void;
  hideModal: () => void;
}
