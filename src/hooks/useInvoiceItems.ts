import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadInvoiceItemsRequest } from '../store/invoiceItems/actions';

export const useInvoiceItems = (invoiceId: number) => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(loadInvoiceItemsRequest(invoiceId));
  }, [invoiceId, dispatch]);
};
