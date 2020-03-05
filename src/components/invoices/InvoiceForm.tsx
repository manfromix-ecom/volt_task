import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InvoiceFormProps } from './types/InvoiceFormProps';
import { CustomerOptionsContainer } from '../../containers/CustomersOptionsContainer';
import { InvoiceItemsContainer } from '../../containers/InvoiceItemsContainer';
import { hideModal } from '../../utils/hideModal';
import { Invoice } from '../../models/Invoice';
import { useInvoiceItems } from '../../hooks/useInvoiceItems';

const validate = (values: Invoice) => {
  const errors: any = {};

  if (!values.discount) {
    errors.discount = 'Required';
  } else if (Number.isNaN(Number(values.discount))) {
    errors.discount = 'Invalid discount';
  }

  if (!values.customerId) {
    errors.customerId = 'Required';
  }

  return errors;
};

export const InvoiceForm = (props: InvoiceFormProps) => {
  const { initialValues, setInvoiceWithItems } = props;
  useInvoiceItems(initialValues.id);

  const onSubmit = (invoice: any) => {
    hideModal();
    if (invoice.items) {
      invoice.items = Object.keys(invoice.items).map((i) => {
        const [idS, productIdS] = i.split(',');
        const id = Number(idS);
        const productId = Number(productIdS);
        const invoiceId = invoice.id || 0;
        const quantity = Number(invoice.items[i] || '');
        return { id, invoiceId, productId, quantity };
      });
    }
    setInvoiceWithItems(invoice);
  };

  const form = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <>
      <Form id="invoice-form" onSubmit={form.handleSubmit}>
        <input type="hidden" name="id" value={form.values.id || ''} onChange={form.handleChange} />
        <Form.Group controlId="discount">
          <Form.Label column={false}>Discount (%)</Form.Label>
          <Form.Control name="discount" type="text" value={String(form.values.discount || '')} onChange={form.handleChange} />
          {form.errors.discount ? <div className="error">{form.errors.discount}</div> : null}
        </Form.Group>
        <Form.Group controlId="customerId">
          <Form.Label column={false}>Customer</Form.Label>
          <Form.Control name="customerId" type="select" as="select" value={String(form.values.customerId)} onChange={form.handleChange}>
            <option value="">Select Customer</option>
            <CustomerOptionsContainer />
          </Form.Control>
          {form.errors.customerId ? <div className="error">{form.errors.customerId}</div> : null}
        </Form.Group>
        <InvoiceItemsContainer invoiceId={form.values.id || 0} form={form} />
        <h5>
          <span>Total: </span>
          {initialValues.total}
        </h5>
        <Button variant="outline-secondary" type="submit" form="invoice-form">
          Save
        </Button>
      </Form>
    </>
  );
};
