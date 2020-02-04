import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

interface invoiceItemsProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const invoiceItems: Array<invoiceItemsProps> = [];
const invoiceItemsRows: Array<JSX.Element | null> = invoiceItems.map(i => {
  const {name, price, quantity} = i;
  return (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>
      <Form>
        <Form.Control name="quantity" defaultValue={quantity} />
      </Form>
    </td>
  </tr>
)});

export const InvoiceItems: React.FC = (props: any) => {
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
        <tbody>
        {invoiceItemsRows}
        </tbody>
      </Table>
    </>
  )
};
