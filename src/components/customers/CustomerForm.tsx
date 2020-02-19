import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Field, reduxForm } from 'redux-form';
import { Customer } from 'MyModels';
import { FieldInput } from '../FormsControls/FieldInput';
import { CustomerFormProps } from './types/CustomersProps';

export const PureForm: React.FC<CustomerFormProps> = (props) => {
  const { handleSubmit, initialValues, initialize } = props;
  const { name, address, phone } = initialValues;
  console.log('initialValues', initialValues);

  useEffect(() => {
    initialize({ name, address, phone });
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label column={false}>Name</Form.Label>
        <Field name="name" type="text" component={FieldInput} {...props} />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label column={false}>Address</Form.Label>
        <Field name="address" type="text" component={FieldInput} {...props} />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label column={false}>Phone</Form.Label>
        <Field name="phone" type="text" component={FieldInput} {...props} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export const CustomerForm = reduxForm<Customer>({ form: 'customerForm', enableReinitialize: true })(PureForm);
