import { Product } from 'MyModels';

export interface ProductRowProps {
  product: Product;
  hideModal: () => void;
}

export interface ProductsStateProps {
  products: Product[];
}
export interface ProductDispatchProps {
  loadProductsRequest: () => void;
  deleteProductRequest: (product: Product) => void;
}
export interface ProductsProps extends ProductsStateProps, ProductDispatchProps {}

export interface ProductFormProps {
  initialValues: Product;
  onSubmit: (formData: any) => void;
}

export interface ProductFormContainerProps {
  product: Product;
  setProduct: (product: Product) => void;
  hideModal: () => void;
}
