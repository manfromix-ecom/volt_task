import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { ButtonModal } from './ButtonModal';
import { InvoiceForm } from './InvoiceForm';

interface invoiceProps {
  id: number;
  customer_id: string;
  discount: number;
  total: number;
}

const invoices: Array<invoiceProps> = [];
const InvoiceRows: Array<JSX.Element | null> = invoices.map(i => {
  const {id, customer_id, discount, total} = i;
  return (
  <tr>
    <td>{id}</td>
    <td>{customer_id}</td>
    <td>{discount}</td>
    <td>{total}</td>
    <td><Link to={`/invoices/${id}/edit`}>edit</Link></td>
  </tr>
)});

export const Invoices: React.FC = () => {
  {}
    return (
        <>
          <h1>Invoice List <ButtonModal title="Create Invoice" body={<InvoiceForm />}/></h1>
          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Discount</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {InvoiceRows}
            </tbody>
          </Table>
        </>
    )
};
