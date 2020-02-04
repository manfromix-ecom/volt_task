import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const InvoiceItemForm = () => {
  return (
    <Form>
      <Form.Group controlId="product_id">
        <Form.Label>Discount (%)</Form.Label>
        <Form.Control as="select" name="product_id" />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Customer</Form.Label>
        <Form.Control name="quantity" />
      </Form.Group>
      <Form.Label>Add product</Form.Label>
      <Button variant="outline-secondary" type="submit">Add</Button>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
        </thead>
      </Table>
      <h2>Total:</h2>
    </Form>
  )
};
