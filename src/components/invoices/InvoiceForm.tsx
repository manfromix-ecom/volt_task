import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Invoice } from 'MyModels';
import { InvoiceFormProps } from './types/InvoiceFormProps';
import { InvoiceItems } from './InvoiceItems';
import { CustomerOptionsContainer } from '../../containers/CustomersOptionsContainer';

export const InvoiceForm = (props: InvoiceFormProps) => {
  const { initialValues, hideModal, setInvoice } = props;

  const onSubmit = (invoice: Invoice) => {
    hideModal();
    setInvoice(invoice);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <input type="hidden" value={formik.values.id} />
      <Form.Group controlId="discount">
        <Form.Label column={false}>Discount (%)</Form.Label>
        <Form.Control name="discount" type="text" value={String(formik.values.discount)} onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group controlId="customerId">
        <Form.Label column={false}>Customer</Form.Label>
        <Form.Control name="customerId" type="select" as="select" value={String(formik.values.customerId)} onChange={formik.handleChange}>
          <option value="">Select Customer</option>
          <CustomerOptionsContainer />
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
