import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InjectedFormProps } from 'redux-form';
import { ProductProps } from './types/ProductsProps';

export const ProductForm: React.FunctionComponent<ProductProps & InjectedFormProps<{}, ProductProps>> = ({ product, handleSubmit }) => {
  const { name, price } = product;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" defaultValue={name} />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" defaultValue={price} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};
