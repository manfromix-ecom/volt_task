import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ButtonModal } from '../common/ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { InvoicesProps } from './types/InvoicesProps';
import { useInvoices } from '../../hooks/useInvoices';
import { useCustomers } from '../../hooks/useCustomers';
import { Invoice } from '../../models/Invoice';
import { Customer } from '../../models/Customer';
import { useInvoicesItems } from '../../hooks/useInvoiceItems';

export const Invoices = (props: InvoicesProps) => {
  document.title = 'Invoices';
  useInvoices();
  useCustomers();
  const { invoices, customers, deleteInvoiceRequest } = props;
  const invoiceIds = invoices.map((invoice) => invoice.id);
  useInvoicesItems(invoiceIds);

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
              const { id, discount, total } = invoice;
              const onDelete = () => {
                deleteInvoiceRequest(invoice);
              };
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer.name}</td>
                  <td>{discount}</td>
                  <td>{total}</td>
                  <td>
                    <ButtonGroup>
                      <ButtonModal title="Edit Invoice" buttonText="Edit">
                        <InvoiceFormContainer initialValues={invoice} />
                      </ButtonModal>
                      <Button variant="outline-secondary" onClick={onDelete}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
