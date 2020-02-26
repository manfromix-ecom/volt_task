import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { fakeState } from '../../store/fakeState';
import { invoiceItemsProps } from './types/InvoiceItemsProps';

const invoiceItems: Array<invoiceItemsProps> = fakeState.invoice_items;
const invoiceItemsRows: Array<JSX.Element | null> = invoiceItems.map((i) => {
  const { id, name, price, quantity } = i;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Form.Control name={`quantity[${id}]`} defaultValue={quantity} />
      </td>
    </tr>
  );
});

export const InvoiceItems: React.FC = () => {
  return (
    <>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>{invoiceItemsRows}</tbody>
      </Table>
    </>
  );
};
