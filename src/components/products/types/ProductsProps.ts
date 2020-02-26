import { Product } from 'MyModels';

export interface ProductsStateProps {
  products: Product[];
}
export interface ProductDispatchProps {
  loadProductsRequest: () => void;
}
export interface ProductsProps extends ProductsStateProps, ProductDispatchProps {}