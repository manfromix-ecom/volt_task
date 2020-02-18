import { Customer } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal, useModal } from '../ButtonModal';
import { AddCustomerForm, EditCustomerForm } from '../../containers/CustomerFormContainer';
import { deleteCustomerRequest } from '../../features/customers/reducer';

interface Props {
  customers: Customer[];
}

const CustomerRow = ({ customer, hideModal }: { customer: Customer; hideModal: () => void }) => {
  const { id, name, address, phone } = customer;
  const onDelete = () => {
    deleteCustomerRequest(customer, id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Customer" buttonText="Edit" body={<EditCustomerForm customer={customer} hideModal={hideModal} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export const PureCustomers = (props: Props) => {
  document.title = 'Customers';
  const { customers } = props;

  const { hideModal } = useModal(true);

  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer" body={<AddCustomerForm customer={{} as Customer} hideModal={hideModal} />} />
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
          {customers.map((customer) => (
            <CustomerRow key={customer.id} customer={customer} hideModal={hideModal} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const Customers = React.memo(PureCustomers);
