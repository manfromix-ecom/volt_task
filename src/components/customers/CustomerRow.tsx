import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../ButtonModal';
import { EditCustomerForm } from '../../containers/CustomerFormContainer';
import { CustomerRowProps } from './types/CustomersProps';
import { deleteCustomerRequest } from '../../features/customers/reducer';

export const CustomerRow = (props: CustomerRowProps) => {
  const { customer, hideModal } = props;
  const { id, name, address, phone } = customer;
  const onDelete = () => {
    deleteCustomerRequest(customer);
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