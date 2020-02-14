import React from 'react';
import { Customer } from 'MyModels';
import { customersAPI } from '../api/customers-api';
import { Customers } from '../components/customers/Customers';

export const useCustomersCollection = () => {
  const [customerCollection, setCustomerCollection] = React.useState<Customer[]>([]);

  const loadCustomerCollection = () => {
    customersAPI.index().then((collection) => setCustomerCollection(collection));
  };

  return { customerCollection, loadCustomerCollection };
};

export const CustomersContainer: React.FC = () => {
  const { customerCollection, loadCustomerCollection } = useCustomersCollection();

  React.useEffect(() => {
    loadCustomerCollection();
  }, []);

  return <Customers customers={customerCollection as Customer[]} />;
};