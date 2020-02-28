import React from 'react';
import Form from 'react-bootstrap/Form';
import { InvoiceItemRowProps } from './types/InvoiceItemRowProps';

export const InvoiceItemRow = (props: InvoiceItemRowProps) => {
  const { item, product, form } = props;
  const { id, quantity } = item;
  const { name, price } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Form.Control name={`items[${id},${item.productId}]`} defaultValue={quantity} onChange={form.handleChange} />
      </td>
    </tr>
  );
};
