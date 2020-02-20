import { Invoice } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal, useModal } from '../ButtonModal';
import { AddInvoiceForm, EditInvoiceForm } from '../../containers/InvoiceFormContainer';
import { deleteInvoiceRequest } from '../../features/invoices/reducer';
import { InvoicesProps } from './types/InvoicesProps';

const InvoiceRow = ({ invoice, hideModal }: { invoice: Invoice; hideModal: () => void }) => {
  const { id, customerId, discount, total } = invoice;
  const onDelete = () => {
    deleteInvoiceRequest(invoice, id);
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

export const PureInvoices = (props: InvoicesProps) => {
  document.title = 'Invoices';
  const { invoices } = props;

  const { hideModal } = useModal(true);

  const newInvoice: Invoice = { customerId: 0, discount: 0, total: 0 };

  return (
    <>
      <h1>
        Invoice List
        <ButtonModal title="Add Invoice" body={<AddInvoiceForm invoice={newInvoice} hideModal={hideModal} />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Discount</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} hideModal={hideModal} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const Invoices = React.memo(PureInvoices);
