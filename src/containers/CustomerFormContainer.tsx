import React from 'react';
import { connect } from 'react-redux';
import { CustomerForm } from '../components/customers/CustomerForm';
import { createCustomerRequest, updateCustomerRequest } from '../features/customers/reducer';
import { CustomerFormContainerProps } from '../components/customers/types/CustomersProps';

const FormContainer = (props: CustomerFormContainerProps) => {
  const { customer, setCustomer, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { name, address, phone } = formData;
    hideModal();
    setCustomer({ name, address, phone, id: customer.id });
  };
  return <CustomerForm initialValues={customer} onSubmit={onSubmit} />;
};

export const EditCustomerForm = connect(null, { setCustomer: updateCustomerRequest })(FormContainer);
export const AddCustomerForm = connect(null, { setCustomer: createCustomerRequest })(FormContainer);
