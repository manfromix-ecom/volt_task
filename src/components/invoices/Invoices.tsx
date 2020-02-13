import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { ButtonModal } from '../ButtonModal';
import { InvoiceForm } from './InvoiceForm';
import { fakeState } from '../../store/fakeState';

interface invoiceProps {
  id?: number;
  customerId?: number;
  discount?: number;
  total?: number;
}

const { invoices } = fakeState;
const InvoiceRows: Array<JSX.Element | null> = invoices.map((i) => {
  const { id, customerId, discount, total } = i;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{customerId}</td>
      <td>{discount}</td>
      <td>{total}</td>
      <td>
        <Link to={`/invoices/${id}/edit`}>edit</Link>
      </td>
    </tr>
  );
});

export const Invoices: React.FC = () => {
  document.title = 'Invoices';
  return (
    <>
      <h1>
        Invoice List
        <ButtonModal title="Create Invoice" body={<InvoiceForm />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Discount</th>
            <th>Total</th>
            <th />
          </tr>
        </thead>
        <tbody>{InvoiceRows}</tbody>
      </Table>
    </>
  );
};
