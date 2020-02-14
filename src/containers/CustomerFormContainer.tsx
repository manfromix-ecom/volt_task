import React from 'react';
import { connect } from 'react-redux';
import { Customer } from 'MyModels';
import { CustomerForm } from '../components/customers/CustomerForm';
import { createUpdateCustomerRequest } from '../features/customers/reducer';

interface ContainerProps {
  customer: Customer;
  setCustomer: (customer: Customer, id: number | undefined) => void;
  hideModal: () => void;
}

const FormContainer = (props: ContainerProps) => {
  const { customer, setCustomer, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { name, address, phone } = formData;
    hideModal();
    setCustomer({ name, address, phone }, customer.id);
  };
  return <CustomerForm initialValues={customer} onSubmit={onSubmit} />;
};

export const CustomerFormContainer = connect(null, { setCustomer: createUpdateCustomerRequest })(FormContainer);
