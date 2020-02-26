import React, { useState } from 'react';
import { CustomersOptionsProps } from './types/CustomersOptionsProps';

export const CustomerOptions = (props: CustomersOptionsProps) => {
  const { customers, loadCustomersRequest } = props;
  const [reloadEmpty, setReloadEmpty] = useState(false);
  if (!reloadEmpty && !customers.length) {
    setReloadEmpty(true);
    loadCustomersRequest();
  }

  return (
    <>
      {customers &&
        customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
    </>
  );
};
