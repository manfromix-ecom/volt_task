import React from 'react';
import { ProductsOptionsProps } from './types/ProductsOptionsProps';
import { useProducts } from '../../hooks/useProducts';

export const ProductOptions: React.FC<ProductsOptionsProps> = (props: ProductsOptionsProps) => {
  useProducts();
  const { products } = props;

  return (
    <>
      {products &&
        products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
    </>
  );
};
