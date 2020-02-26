import { Product } from 'MyModels';

export interface ProductFormProps {
  initialValues: Product;
  setProduct: (product: Product) => void;
  hideModal: () => void;
}