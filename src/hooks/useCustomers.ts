import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadCustomersRequest } from '../store/customers/actions';

export const useCustomers = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(loadCustomersRequest());
  }, []);
};
