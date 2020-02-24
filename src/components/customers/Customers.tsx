import { Customer } from 'MyModels';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { ButtonModal, useModal } from '../ButtonModal';
import { AddCustomerForm } from '../../containers/CustomerFormContainer';
import { CustomersProps } from './types/CustomersProps';
import { CustomerRow } from './CustomerRow';

const PureCustomers = (props: CustomersProps) => {
  document.title = 'Customers';
  console.log('CustomersProps', props);
  const { customers, load } = props;
  const { hideModal } = useModal(true);
  const [customersState, setCustomersState] = useState(customers);

  useEffect(() => {
    if (!customersState) {
      load();
      setCustomersState(customers);
    }
  }, [customers, customersState, load]);

  // if (!customers) {
  //   return <Loading />;
  // }

  const newCustomer: Customer = { name: '', address: '', phone: '' };

  const onLoad = () => {
    load();
  };

  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer" body={<AddCustomerForm customer={newCustomer} hideModal={hideModal} />} />
        <Button variant="outline-secondary" onClick={onLoad}>
          Load
        </Button>
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
          {customersState && customersState.map((customer) => <CustomerRow key={customer.id} customer={customer} hideModal={hideModal} />)}
        </tbody>
      </Table>
    </>
  );
};

export const Customers = React.memo(PureCustomers);
