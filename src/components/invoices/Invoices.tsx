import { Invoice } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal, useModal } from '../ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { deleteInvoiceRequest } from '../../features/invoices/reducer';

interface Props {
  invoices: Invoice[];
}

const InvoiceRow = ({ invoice, hideModal }: { invoice: Invoice; hideModal: () => void }) => {
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
          <ButtonModal title="Edit Invoice" buttonText="Edit" body={<InvoiceFormContainer invoice={invoice} hideModal={hideModal} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export const PureInvoices = (props: Props) => {
  document.title = 'Invoices';
  const { invoices } = props;

  const { hideModal } = useModal(true);

  return (
    <>
      <h1>
        Invoice List
        <ButtonModal title="Add Invoice" body={<InvoiceFormContainer invoice={{} as Invoice} hideModal={hideModal} />} />
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
