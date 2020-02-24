import { Product } from 'MyModels';

export interface ProductsProps {
  products: Product[];
}

export interface ProductFormProps {
  initialValues: Product;
  onSubmit: (formData: any) => void;
}
