import { Customer } from 'MyModels';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal, useModal } from '../common/ButtonModal';
import { CustomerFormContainer } from '../../containers/CustomerFormContainer';
import { CustomerRowContainer } from '../../containers/CustomerRowContainer';
import { CustomersProps } from './types/CustomersProps';

export const Customers = (props: CustomersProps) => {
  document.title = 'Customers';
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
