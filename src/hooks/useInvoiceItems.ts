import { useEffect } from 'react';
import { useReduxDispatch } from './useReduxDispatch';
import { loadInvoiceItemsRequest } from '../store/invoiceItems/actions';

export const useInvoiceItems = (invoiceId: number | undefined) => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    if (invoiceId) dispatch(loadInvoiceItemsRequest(invoiceId));
  }, [invoiceId, dispatch]);
};

export const useInvoicesItems = (invoiceIds: Array<number | undefined>) => {
  const dispatch = useReduxDispatch();

  useEffect(() => {
    invoiceIds.forEach((invoiceId) => {
      if (invoiceId) return dispatch(loadInvoiceItemsRequest(invoiceId));
    });
  }, [dispatch]);
};
