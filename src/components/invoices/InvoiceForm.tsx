import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InvoiceFormProps } from './types/InvoicesProps';
import { InvoiceItems } from './InvoiceItems';

export const InvoiceForm = (props: InvoiceFormProps) => {
  const { onSubmit, initialValues } = props;

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="discount">
        <Form.Label column={false}>Discount (%)</Form.Label>
        <Form.Control name="discount" type="text" value={String(formik.values.discount)} onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group controlId="customerId">
        <Form.Label column={false}>Customer</Form.Label>
        <Form.Control name="customerId" type="select" as="select" value={String(formik.values.customerId)} onChange={formik.handleChange}>
          <option value="">Select Customer</option>
        </Form.Control>
      </Form.Group>
      <Form.Label column={false}>Add product</Form.Label>
      <Button variant="outline-secondary" type="submit">
        Add
      </Button>
      <InvoiceItems />
      <h2>
        <span>Total: </span>
        {String(formik.values.total)}
      </h2>
    </Form>
  );
};
