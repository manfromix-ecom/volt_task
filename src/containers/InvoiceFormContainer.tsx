import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { createInvoiceRequest, updateInvoiceRequest } from '../features/invoices/reducer';
import { InvoiceFormDispatchProps, InvoiceFormContainerProps, InvoiceFormStateProps } from '../components/invoices/types/InvoicesProps';
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

const mapStateToProps = (state: any): InvoiceFormStateProps => {
  return {
    customers: getCustomers(state),
  };
};

const mapDispatchToPropsUpdate = (dispatch: Dispatch) => {
  const combinedActions: InvoiceFormDispatchProps = Object.assign(
    {},
    {
      loadCustomersRequest,
      setInvoice: updateInvoiceRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

const mapDispatchToPropsCreate = (dispatch: Dispatch) => {
  const combinedActions: InvoiceFormDispatchProps = Object.assign(
    {},
    {
      loadCustomersRequest,
      setInvoice: createInvoiceRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const EditInvoiceForm = connect<InvoiceFormStateProps, InvoiceFormDispatchProps>(
  mapStateToProps,
  mapDispatchToPropsUpdate
)(FormContainer);
export const AddInvoiceForm = connect<InvoiceFormStateProps, InvoiceFormDispatchProps>(
  mapStateToProps,
  mapDispatchToPropsCreate
)(FormContainer);
