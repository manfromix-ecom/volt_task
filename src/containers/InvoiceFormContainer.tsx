import React from 'react';
import { connect } from 'react-redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createInvoiceRequest, updateInvoiceRequest } from '../features/invoices/reducer';
import { InvoiceFormContainerProps } from '../components/invoices/types/InvoicesProps';
import { CustomersStateProps } from '../components/customers/types/CustomersProps';
import { getCustomers } from '../features/customers/selectors';
import { loadCustomersRequest } from '../features/customers/reducer';

const FormContainer = (props: InvoiceFormContainerProps) => {
  const { invoice, setInvoice, hideModal, customers } = props;

  const onSubmit = (formData: any) => {
    const { customerId, discount, total } = formData;
    hideModal();
    setInvoice({ customerId, discount, total, id: invoice.id });
  };
  return <InvoiceForm initialValues={invoice} onSubmit={onSubmit} customers={customers} loadCustomersRequest={loadCustomersRequest} />;
};

const mapStateToProps = (state: any): CustomersStateProps => {
  return {
    customers: getCustomers(state),
  };
};

export const EditInvoiceForm = connect(mapStateToProps, { setInvoice: updateInvoiceRequest })(FormContainer);
export const AddInvoiceForm = connect(mapStateToProps, { setInvoice: createInvoiceRequest })(FormContainer);
