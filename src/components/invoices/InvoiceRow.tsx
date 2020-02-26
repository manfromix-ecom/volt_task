import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../common/ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { InvoiceRowProps } from './types/InvoiceRowProps';

export const InvoiceRow = (props: InvoiceRowProps) => {
  const { invoice, hideModal, deleteInvoiceRequest } = props;
  const { id, customerId, discount, total } = invoice;
  const onDelete = () => {
    deleteInvoiceRequest(invoice);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{customerId}</td>
      <td>{discount}</td>
      <td>{total}</td>
      <td>
        <ButtonGroup>
          <ButtonModal
            title="Edit Invoice"
            buttonText="Edit"
            body={<InvoiceFormContainer initialValues={invoice} hideModal={hideModal} />}
          />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
