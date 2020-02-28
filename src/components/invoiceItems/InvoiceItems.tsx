import React from 'react';
import Table from 'react-bootstrap/Table';
import { Product } from 'MyModels';
import { InvoiceItemRow } from './InvoiceItemRow';
import { useInvoiceItems } from '../../hooks/useInvoiceItems';
import { InvoiceItemsProps } from './types/InvoiceItemsProps';
import { AddInvoiceItemContainer } from '../../containers/AddInvoiceItemContainer';

export const InvoiceItems = (props: InvoiceItemsProps) => {
  const { invoiceItems, invoiceId, products, form } = props;
  useInvoiceItems(invoiceId);
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
        <tbody>
          {invoiceItems.map((item) => {
            if (!invoiceId || invoiceId !== item.invoiceId) return null;
            const productsFiltered = products.filter((current: Product) => current.id === Number(item.productId));
            const product = productsFiltered.length ? productsFiltered[0] : ({} as Product);
            return <InvoiceItemRow key={item.id} item={item} product={product} form={form} />;
          })}
        </tbody>
      </Table>
    </>
  );
};
