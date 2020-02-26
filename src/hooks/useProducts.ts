import { useState } from 'react';
import { Product } from 'MyModels';
import { useReduxDispatch } from './useReduxDispatch';
import { loadProductsRequest } from '../features/products/actions';

export const useProducts = (products: Product[]) => {
  const [reloadEmpty, setReloadEmpty] = useState(false);
  const dispatch = useReduxDispatch();
  if (!reloadEmpty && !products.length) {
    setReloadEmpty(true);
    dispatch(loadProductsRequest());
  }
};
