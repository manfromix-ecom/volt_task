import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface productProps {
  id?: number;
  name?: string;
  price?: number;
}

export const ProductForm: React.FC<productProps> = (props: productProps) => {
  const {name, price} = props;
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" defaultValue={name} />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" defaultValue={price} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">Save</Button>
    </Form>
  )
};
