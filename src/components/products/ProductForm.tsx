import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Product } from 'MyModels';
import { InjectedFormProps } from 'redux-form';

export interface Props {
  product: Product;
}

export const ProductForm: React.FunctionComponent<Props & InjectedFormProps<{}, Props>> = ({ product, handleSubmit }) => {
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
