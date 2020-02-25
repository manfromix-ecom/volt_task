import React from 'react';
import { connect } from 'react-redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createInvoiceRequest, updateInvoiceRequest } from '../features/invoices/reducer';
import { InvoiceFormContainerProps } from '../components/invoices/types/InvoicesProps';

const FormContainer = (props: InvoiceFormContainerProps) => {
  const { invoice, setInvoice, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { customerId, discount, total } = formData;
    hideModal();
    setInvoice({ customerId, discount, total, id: invoice.id });
  };
  return <InvoiceForm initialValues={invoice} onSubmit={onSubmit} />;
};

export const EditInvoiceForm = connect(null, { setInvoice: updateInvoiceRequest })(FormContainer);
export const AddInvoiceForm = connect(null, { setInvoice: createInvoiceRequest })(FormContainer);
