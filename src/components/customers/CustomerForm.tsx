import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FieldInput } from '../FormsControls/FieldInput';

interface CustomerFormProps extends InjectedFormProps {}

export const PureForm = (props: CustomerFormProps) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label column={false}>Name</Form.Label>
        <Field name="name" type="text" component={FieldInput} />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label column={false}>Address</Form.Label>
        <Field name="address" type="text" component={FieldInput} />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label column={false}>Phone</Form.Label>
        <Field name="phone" type="text" component={FieldInput} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export const CustomerForm = reduxForm<{}>({ form: 'customer_form' })(PureForm);
