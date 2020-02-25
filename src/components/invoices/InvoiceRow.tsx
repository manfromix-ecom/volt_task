import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../common/ButtonModal';
import { EditInvoiceForm } from '../../containers/InvoiceFormContainer';
import { InvoiceRowProps } from './types/InvoicesProps';
import { deleteInvoiceRequest } from '../../features/invoices/reducer';

export const InvoiceRow = (props: InvoiceRowProps) => {
  const { invoice, hideModal } = props;
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
          <ButtonModal title="Edit Invoice" buttonText="Edit" body={<EditInvoiceForm invoice={invoice} hideModal={hideModal} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
