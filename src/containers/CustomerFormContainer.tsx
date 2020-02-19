import React from 'react';
import { connect } from 'react-redux';
import { CustomerForm } from '../components/customers/CustomerForm';
import { createCustomerRequest, updateCustomerRequest } from '../features/customers/reducer';
import { CustomerContainerProps } from './types/CustomerContainerProps';

const FormContainer = (props: CustomerContainerProps) => {
  const { customer, setCustomer, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { name, address, phone } = formData;
    console.log('formData', formData);
    hideModal();
    setCustomer({ name, address, phone }, customer.id);
  };
  return <CustomerForm initialValues={customer} onSubmit={onSubmit} />;
};

export const EditCustomerForm = connect(null, { setCustomer: updateCustomerRequest })(FormContainer);
export const AddCustomerForm = connect(null, { setCustomer: createCustomerRequest })(FormContainer);
