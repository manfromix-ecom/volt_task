import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InvoiceItems } from './InvoiceItems';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FieldInput } from '../FormsControls/FieldInput';

interface Props extends InjectedFormProps {}

export const PureForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="discount">
        <Form.Label column={false}>Discount (%)</Form.Label>
        <Field name="discount" type="text" component={FieldInput} />
      </Form.Group>
      <Form.Group controlId="customerId">
        <Form.Label column={false}>Customer</Form.Label>
        <Field name="customerId" type="select" as="select" component={FieldInput} />
      </Form.Group>
      <Form.Label column={false}>Add product</Form.Label>
      <Button variant="outline-secondary" type="submit">
        Add
      </Button>
      <InvoiceItems />
      <h2>
        Total:
        <Field name="total" type="span" plaintext={true} component={FieldInput} />
      </h2>
    </Form>
  );
};

export const InvoiceForm = reduxForm<{}>({ form: 'customer_form' })(PureForm);
