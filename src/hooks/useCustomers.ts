import { useState } from 'react';
import { Customer } from 'MyModels';
import { useReduxDispatch } from './useReduxDispatch';
import { loadCustomersRequest } from '../features/customers/actions';

export const useCustomers = (customers: Customer[]) => {
  const [reloadEmpty, setReloadEmpty] = useState(false);
  const dispatch = useReduxDispatch();
  if (!reloadEmpty && !customers.length) {
    setReloadEmpty(true);
    dispatch(loadCustomersRequest());
  }
};
