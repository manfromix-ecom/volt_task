import { Product } from 'MyModels';

export interface ProductsStateProps {
  products: Product[];
}
export interface ProductDispatchProps {}
export interface ProductsProps extends ProductsStateProps, ProductDispatchProps {}
