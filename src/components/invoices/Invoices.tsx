import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from '../common/ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { InvoicesProps } from './types/InvoicesProps';
import { InvoiceRowContainer } from '../../containers/InvoiceRowContainer';
import { useInvoices } from '../../hooks/useInvoices';
import { useCustomers } from '../../hooks/useCustomers';
import { Invoice } from '../../models/Invoice';
import { Customer } from '../../models/Customer';

export const Invoices = (props: InvoicesProps) => {
  document.title = 'Invoices';
  useInvoices();
  useCustomers();
  const { invoices, customers } = props;

  const newInvoice: Invoice = { customerId: 0, discount: 0, total: 0 };
  return (
    <>
      <h1>
        Invoice List
        <ButtonModal title="Add Invoice">
          <InvoiceFormContainer initialValues={newInvoice} />
        </ButtonModal>
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Discount (%)</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.map((invoice) => {
              const customersFiltered = customers.filter((current: Customer) => current.id === Number(invoice.customerId));
              const customer = customersFiltered.length ? customersFiltered[0] : ({} as Customer);
              return <InvoiceRowContainer key={invoice.id} invoice={invoice} customer={customer} />;
            })}
        </tbody>
      </Table>
    </>
  );
};
