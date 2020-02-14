import React from 'react';
import { Product } from 'MyModels';
import { productsAPI } from '../api/products-api';
import { Products } from '../components/products/Products';

export const useProductsCollection = () => {
  const [productCollection, setProductCollection] = React.useState<Product[]>([]);

  const loadProductCollection = () => {
    productsAPI.index().then((collection) => setProductCollection(collection));
  };

  return { productCollection, loadProductCollection };
};

export const ProductsContainer: React.FC = () => {
  const { productCollection, loadProductCollection } = useProductsCollection();

  React.useEffect(() => {
    loadProductCollection();
  }, []);

  return <Products products={productCollection as Product[]} />;
};