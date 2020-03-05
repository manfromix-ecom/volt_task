import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../common/ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { useInvoiceItems } from '../../hooks/useInvoiceItems';
import { InvoiceRowProps } from './types/InvoiceRowProps';

export const InvoiceRow: React.FC<InvoiceRowProps> = (props: InvoiceRowProps) => {
  const { invoice, customer, deleteInvoiceRequest } = props;
  const { id, discount, total } = invoice;
  useInvoiceItems(id || 0);
  const onDelete = () => {
    deleteInvoiceRequest(invoice);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{customer.name}</td>
      <td>{discount}</td>
      <td>{total}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Invoice" buttonText="Edit">
            <InvoiceFormContainer initialValues={invoice} />
          </ButtonModal>
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
