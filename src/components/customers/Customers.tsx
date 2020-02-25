import { Customer } from 'MyModels';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal, useModal } from '../common/ButtonModal';
import { AddCustomerForm } from '../../containers/CustomerFormContainer';
import { CustomersProps } from './types/CustomersProps';
import { CustomerRow } from './CustomerRow';

export const Customers = (props: CustomersProps) => {
  document.title = 'Customers';
  console.log('CustomersProps', props);
  const { customers, loadCustomersRequest } = props;
  const [reloadEmpty, setReloadEmpty] = useState(false);
  if (!reloadEmpty && !customers.length) {
    setReloadEmpty(true);
    loadCustomersRequest();
  }
  const { hideModal } = useModal(true);

  const newCustomer: Customer = { name: '', address: '', phone: '' };
  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer" body={<AddCustomerForm customer={newCustomer} hideModal={hideModal} />} />
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
          {customers && customers.map((customer) => <CustomerRow key={customer.id} customer={customer} hideModal={hideModal} />)}
        </tbody>
      </Table>
    </>
  );
};
