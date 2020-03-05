import { Product } from '../../../models/Product';

export interface ProductsStateProps {
  products: Array<Product>;
}
export interface ProductDispatchProps {
  deleteProductRequest: (product: Product) => void;
}
export interface ProductsProps extends ProductsStateProps, ProductDispatchProps {}
