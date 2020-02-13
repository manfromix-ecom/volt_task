import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InvoiceItems } from './InvoiceItems';

interface invoiceProps {
  customerId?: number;
  discount?: number;
  total?: number;
  isModal?: boolean;
}

export const InvoiceForm: React.FC<invoiceProps> = (props: invoiceProps) => {
  const { customerId, discount, total = 0, isModal = true } = props;
  return (
    <Form>
      {!isModal && <h1>Edit Invoice</h1>}
      <Form.Group controlId="discount">
        <Form.Label>Discount (%)</Form.Label>
        <Form.Control name="discount" defaultValue={discount} />
      </Form.Group>
      <Form.Group controlId="customerId">
        <Form.Label>Customer</Form.Label>
        <Form.Control as="select" name="customerId" defaultValue={customerId} />
      </Form.Group>
      <Form.Label>Add product</Form.Label>
      <Button variant="outline-secondary" type="submit">
        Add
      </Button>
      <InvoiceItems />
      <h2>
        Total:
        {total}
      </h2>
    </Form>
  );
};
