import React from 'react';
import { CustomersOptionsProps } from './types/CustomersOptionsProps';
import { useCustomers } from '../../hooks/useCustomers';

export const CustomerOptions = (props: CustomersOptionsProps) => {
  useCustomers();
  const { customers } = props;

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
