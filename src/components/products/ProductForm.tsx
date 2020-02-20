import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ProductFormProps } from './types/ProductsProps';

export const ProductForm = (props: ProductFormProps) => {
  const { onSubmit, initialValues } = props;

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label column={false}>Name</Form.Label>
        <Form.Control name="name" type="text" value={formik.values.name} onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label column={false}>Price</Form.Label>
        <Form.Control name="price" type="text" value={formik.values.price} onChange={formik.handleChange} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};
