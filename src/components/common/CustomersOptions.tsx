import React from 'react';
import { CustomersOptionsProps } from './types/CustomersOptionsProps';
import { useCustomers } from '../../hooks/useCustomers';

export const CustomerOptions = (props: CustomersOptionsProps) => {
  const { customers } = props;
  useCustomers(customers);

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
