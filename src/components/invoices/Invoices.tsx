import { Invoice } from 'MyModels';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal, useModal } from '../common/ButtonModal';
import { InvoiceFormContainer } from '../../containers/InvoiceFormContainer';
import { InvoicesProps } from './types/InvoicesProps';
import { InvoiceRowContainer } from '../../containers/InvoiceRowContainer';

export const Invoices = (props: InvoicesProps) => {
  document.title = 'Invoices';
  const { invoices, loadInvoicesRequest } = props;
  console.log(invoices);
  const [reloadEmpty, setReloadEmpty] = useState(false);
  if (!reloadEmpty && !invoices.length) {
    setReloadEmpty(true);
    loadInvoicesRequest();
  }
  const { hideModal } = useModal(true);

  const newInvoice: Invoice = { customerId: 0, discount: 0, total: 0 };
  return (
    <>
      <h1>
        Invoice List
        <ButtonModal title="Add Invoice" body={<InvoiceFormContainer initialValues={newInvoice} hideModal={hideModal} />} />
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
          {invoices && invoices.map((invoice) => <InvoiceRowContainer key={invoice.id} invoice={invoice} hideModal={hideModal} />)}
        </tbody>
      </Table>
    </>
  );
};
