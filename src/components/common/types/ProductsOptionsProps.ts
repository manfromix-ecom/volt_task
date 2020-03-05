import { Product } from '../../../models/Product';

export interface ProductsOptionsProps extends ProductsOptionsStateProps, ProductsOptionsDispatchProps {}

export interface ProductsOptionsStateProps {
  products: Array<Product>;
}

export interface ProductsOptionsDispatchProps {}
