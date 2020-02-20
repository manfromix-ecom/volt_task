import React, { useEffect, useState } from 'react';
import { Customer } from 'MyModels';
import { customersAPI } from '../api/customers-api';
import { loadCustomersRequest } from '../features/customers/reducer';
import { Customers } from '../components/customers/Customers';

export const CustomersContainer: React.FC = () => {
  const [customerCollection, setCustomerCollection] = useState<Customer[]>([]);

  useEffect(() => {
    const loadCustomerCollection = () => {
      loadCustomersRequest();
      // customersAPI.index().then((collection) => setCustomerCollection(collection));
    };
    loadCustomerCollection();
  }, []);

  return <Customers customers={customerCollection as Customer[]} />;
};