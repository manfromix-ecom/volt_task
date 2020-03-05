import { Product } from '../../../models/Product';

export interface ProductFormStateProps {}

export interface ProductFormDispatchProps {
  setProduct: (product: Product) => void;
}

export interface ProductFormProps extends ProductFormStateProps, ProductFormDispatchProps {
  initialValues: Product;
}
