import React from 'react';
import Table from 'react-bootstrap/Table';
import { InvoiceItemsProps } from './types/InvoiceItemsProps';
import { AddInvoiceItemContainer } from '../../containers/AddInvoiceItemContainer';
import { InvoiceItemRow } from './InvoiceItemRow';
import { Product } from '../../models/Product';

export const InvoiceItems = (props: InvoiceItemsProps) => {
  const { invoiceItems, invoiceId, products, form } = props;
  const onChange = (e: React.SyntheticEvent) => {
    form.handleChange(e);
  };
  const InvoiceItemRows = invoiceItems.map((item) => {
    if (!invoiceId || invoiceId !== item.invoiceId) return null;
    const productsFiltered = products.filter((current: Product) => current.id === Number(item.productId));
    item.product = productsFiltered.length ? productsFiltered[0] : ({} as Product);
    return <InvoiceItemRow key={item.id} item={item} onChange={onChange} />;
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
