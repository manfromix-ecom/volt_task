import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ButtonModal } from '../common/ButtonModal';
import { CustomerFormContainer } from '../../containers/CustomerFormContainer';
import { CustomersProps } from './types/CustomersProps';
import { useCustomers } from '../../hooks/useCustomers';
import { Customer } from '../../models/Customer';

export const Customers: React.FC<CustomersProps> = (props: CustomersProps) => {
  document.title = 'Customers';
  useCustomers();
  const { customers, deleteCustomerRequest } = props;

  const newCustomer: Customer = { name: '', address: '', phone: '' };
  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer">
          <CustomerFormContainer initialValues={newCustomer} />
        </ButtonModal>
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
          {customers &&
            customers.map((customer) => {
              const { id, name, address, phone } = customer;
              const onDelete = () => {
                deleteCustomerRequest(customer);
              };
              return (
                <tr key={customer.id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{phone}</td>
                  <td>
                    <ButtonGroup>
                      <ButtonModal title="Edit Customer" buttonText="Edit">
                        <CustomerFormContainer initialValues={customer} />
                      </ButtonModal>
                      <Button variant="outline-secondary" onClick={onDelete}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
