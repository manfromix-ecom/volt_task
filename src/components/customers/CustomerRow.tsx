import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../common/ButtonModal';
import { CustomerFormContainer } from '../../containers/CustomerFormContainer';
import { CustomerRowProps } from './types/CustomerRowProps';
import { deleteCustomerRequest } from '../../features/customers/actions';

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
          <ButtonModal
            title="Edit Customer"
            buttonText="Edit"
            body={<CustomerFormContainer initialValues={customer} hideModal={hideModal} />}
          />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
