import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { InvoiceItemsProps } from './types/InvoiceItemsProps';
import { AddInvoiceItemContainer } from '../../containers/AddInvoiceItemContainer';
import { Product } from '../../models/Product';

export const InvoiceItems = (props: InvoiceItemsProps) => {
  const { invoiceItems, invoiceId, products, form } = props;
  const onChange = (e: React.SyntheticEvent) => {
    form.handleChange(e);
  };
  const InvoiceItemRows = invoiceItems.map((item) => {
    if (!invoiceId || invoiceId !== item.invoiceId) return null;
    const productsFiltered = products.filter((current: Product) => current.id === Number(item.productId));
    const { id, quantity } = item;
    const product = productsFiltered.length ? productsFiltered[0] : ({} as Product);
    if (!product) return null;
    const { name, price } = product;
    return (
      <tr key={item.id}>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <Form.Control name={`items[${id},${item.productId}]`} defaultValue={quantity} onChange={onChange} data-price={price} />
        </td>
      </tr>
    );
  });

  return (
    <>
      {invoiceId && <AddInvoiceItemContainer invoiceId={invoiceId} />}
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>{InvoiceItemRows}</tbody>
      </Table>
    </>
  );
};
