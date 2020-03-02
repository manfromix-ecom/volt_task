import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadProductsRequest } from '../store/products/actions';

export const useProducts = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);
};
