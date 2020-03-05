import { Product } from '../../../models/Product';

export interface ProductFormProps {
  initialValues: Product;
  setProduct: (product: Product) => void;
}
