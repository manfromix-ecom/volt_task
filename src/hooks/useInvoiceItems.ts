import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadInvoiceItemsRequest } from '../store/invoice-items/actions';

export const useInvoiceItems = (invoiceId: number) => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(loadInvoiceItemsRequest(invoiceId));
  }, [invoiceId]);
};
