import { useState } from 'react';
import { Invoice } from 'MyModels';
import { useReduxDispatch } from './useReduxDispatch';
import { loadInvoicesRequest } from '../features/invoices/actions';

export const useInvoices = (invoices: Invoice[]) => {
  const [reloadEmpty, setReloadEmpty] = useState(false);
  const dispatch = useReduxDispatch();
  if (!reloadEmpty && !invoices.length) {
    setReloadEmpty(true);
    dispatch(loadInvoicesRequest());
  }
};
