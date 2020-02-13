import React from 'react';
import { connect } from 'react-redux';
import { Customer } from 'MyModels';
import { CustomerForm } from '../components/customers/CustomerForm';
import { createUpdateCustomerRequest } from '../features/customers/reducer';
import { useModal } from '../components/ButtonModal';

interface ContainerProps {
  customer: Customer;
  setCustomer: (customer: Customer) => void;
}

const FormContainer = (props: ContainerProps) => {
  const { customer, setCustomer } = props;

  const {show, setShow} = useModal(true);

  const onSubmit = (formData: any) => {
    console.log('onSubmit', formData);
    const { name, address, phone } = formData;
    setShow(false);
    setCustomer({ name, address, phone });
  };
  return <CustomerForm initialValues={customer} onSubmit={onSubmit} />;
};

export const CustomerFormContainer = connect(null, { setCustomer: createUpdateCustomerRequest })(FormContainer);
