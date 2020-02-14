import React from 'react';
import { connect } from 'react-redux';
import { Invoice } from 'MyModels';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createUpdateInvoiceRequest } from '../features/invoices/reducer';

interface ContainerProps {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
  hideModal: () => void;
}

const FormContainer = (props: ContainerProps) => {
  const { invoice, setInvoice, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { customerId, discount, total } = formData;
    hideModal();
    setInvoice({ customerId, discount, total });
  };
  return <InvoiceForm initialValues={invoice} onSubmit={onSubmit} />;
};

export const InvoiceFormContainer = connect(null, { setInvoice: createUpdateInvoiceRequest })(FormContainer);
