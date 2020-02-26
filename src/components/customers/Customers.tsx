import { Customer } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from '../common/ButtonModal';
import { CustomerFormContainer } from '../../containers/CustomerFormContainer';
import { CustomerRowContainer } from '../../containers/CustomerRowContainer';
import { CustomersProps } from './types/CustomersProps';
import { useCustomers } from '../../hooks/useCustomers';
import { useModal } from '../../hooks/useModal';

export const Customers = (props: CustomersProps) => {
  document.title = 'Customers';
  const { customers } = props;
  useCustomers(customers);

  const { hideModal } = useModal(true);

  const newCustomer: Customer = { name: '', address: '', phone: '' };
  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer" body={<CustomerFormContainer initialValues={newCustomer} hideModal={hideModal} />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((customer) => <CustomerRowContainer key={customer.id} customer={customer} hideModal={hideModal} />)}
        </tbody>
      </Table>
    </>
  );
};
