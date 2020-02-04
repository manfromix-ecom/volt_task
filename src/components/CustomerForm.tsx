import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface customerProps {
  id?: number;
  name?: string;
  address?: number;
  phone?: number;
}

export const CustomerForm: React.FC<customerProps> = (props: customerProps) => {
  const {name, address, phone} = props;
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" defaultValue={name} />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" defaultValue={address} />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" defaultValue={phone} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">Save</Button>
    </Form>
  )
};
