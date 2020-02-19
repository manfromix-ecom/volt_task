import React from 'react';
import { Product } from 'MyModels';
import { productsAPI } from '../api/products-api';
import { Products } from '../components/products/Products';

export const ProductsContainer: React.FC = () => {
  const [productCollection, setProductCollection] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const loadProductCollection = () => {
      productsAPI.index().then((collection) => setProductCollection(collection));
    };
    loadProductCollection();
  }, []);

  return <Products products={productCollection as Product[]} />;
};