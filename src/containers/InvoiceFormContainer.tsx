import React from 'react';
import { connect } from 'react-redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createUpdateInvoiceRequest } from '../features/invoices/reducer';
import { fakeState } from '../store/fakeState';
import { InvoiceContainerProps } from './types/InvoiceContainerProps';

const FormContainer = (props: InvoiceContainerProps) => {
  const { invoice, setInvoice, hideModal, customers } = props;
  console.log(customers);

  const onSubmit = (formData: any) => {
    const { customerId, discount, total } = formData;
    hideModal();
    setInvoice({ customerId, discount, total });
  };
  return <InvoiceForm initialValues={invoice} onSubmit={onSubmit} />;
};

const mapStateToProps = (state: any) => ({
  customers: fakeState.customers,
});

export const InvoiceFormContainer = connect(mapStateToProps, { setInvoice: createUpdateInvoiceRequest })(FormContainer);
