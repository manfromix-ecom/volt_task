import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadInvoicesRequest } from '../store/invoices/actions';

export const useInvoices = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(loadInvoicesRequest());
  }, [dispatch]);
};
