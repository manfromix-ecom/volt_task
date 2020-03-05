import { Product } from '../../../models/Product';

export interface ProductsStateProps {
  products: Array<Product>;
}
export interface ProductDispatchProps {}
export interface ProductsProps extends ProductsStateProps, ProductDispatchProps {}
