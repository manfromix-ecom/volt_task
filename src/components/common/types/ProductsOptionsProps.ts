import { Product } from 'MyModels';

export interface ProductsOptionsProps extends ProductsOptionsStateProps, ProductsOptionsDispatchProps {}

export interface ProductsOptionsStateProps {
  products: Product[];
}

export interface ProductsOptionsDispatchProps {}