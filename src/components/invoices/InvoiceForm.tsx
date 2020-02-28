import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Invoice, InvoiceItem } from 'MyModels';
import { InvoiceFormProps } from './types/InvoiceFormProps';
import { CustomerOptionsContainer } from '../../containers/CustomersOptionsContainer';
import { hideModal } from '../../utils/hideModal';
import { InvoiceItemsContainer } from '../../containers/InvoiceItemsContainer';

export const InvoiceForm = (props: InvoiceFormProps) => {
  const { initialValues, setInvoice, setInvoiceItem } = props;

  const onSubmit = (invoice: Invoice) => {
    hideModal();
    setInvoice(invoice);
    if (invoice.items) {
      for (const i in invoice.items) {
        const [idS, productIdS] = i.split(',');
        const id = Number(idS);
        const productId = Number(productIdS);
        const invoiceId = invoice.id || 0;
        const quantity = invoice.items[i] || 0;
        const item = { id, invoiceId, productId, quantity };
        setInvoiceItem(item as InvoiceItem);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <Form id="invoice-form" onSubmit={formik.handleSubmit}>
        <input type="hidden" value={formik.values.id || ''} />
        <Form.Group controlId="discount">
          <Form.Label column={false}>Discount (%)</Form.Label>
          <Form.Control name="discount" type="text" value={String(formik.values.discount || '')} onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="customerId">
          <Form.Label column={false}>Customer</Form.Label>
          <Form.Control name="customerId" type="select" as="select" value={String(formik.values.customerId)} onChange={formik.handleChange}>
            <option value="">Select Customer</option>
            <CustomerOptionsContainer />
          </Form.Control>
        </Form.Group>
        <InvoiceItemsContainer invoiceId={formik.values.id || 0} form={formik} />
        <h5>
          <span>Total: </span>
          {String(formik.values.total)}
        </h5>
        <Button variant="outline-secondary" type="submit" form="invoice-form">
          Save
        </Button>
      </Form>
    </>
  );
};
