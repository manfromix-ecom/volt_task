import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Field, reduxForm } from 'redux-form';
import { InvoiceItems } from './InvoiceItems';
import { FieldInput } from '../FormsControls/FieldInput';
import { InvoiceFormProps } from './types/InvoicesProps';

const PureForm = (props: InvoiceFormProps) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="discount">
        <Form.Label column={false}>Discount (%)</Form.Label>
        <Field name="discount" type="text" component={FieldInput} />
      </Form.Group>
      <Form.Group controlId="customerId">
        <Form.Label column={false}>Customer</Form.Label>
        <Field name="customerId" type="select" as="select" component={FieldInput}>
          <option value="">Select Customer</option>
        </Field>
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
