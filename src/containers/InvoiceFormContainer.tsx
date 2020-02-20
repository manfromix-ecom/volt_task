import React from 'react';
import { connect } from 'react-redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createInvoiceRequest, updateInvoiceRequest } from '../features/invoices/reducer';
import { InvoiceContainerProps } from './types/InvoiceContainerProps';

const FormContainer = (props: InvoiceContainerProps) => {
  const { invoice, setInvoice, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { customerId, discount, total } = formData;
    console.log('formData', formData, invoice);
    hideModal();
    setInvoice({ customerId, discount, total, id: invoice.id }, invoice.id);
  };
  return <InvoiceForm initialValues={invoice} onSubmit={onSubmit} />;
};

export const EditInvoiceForm = connect(null, { setInvoice: updateInvoiceRequest })(FormContainer);
export const AddInvoiceForm = connect(null, { setInvoice: createInvoiceRequest })(FormContainer);
