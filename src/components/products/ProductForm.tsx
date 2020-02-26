import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Product } from 'MyModels';
import { ProductFormProps } from './types/ProductFormProps';

export const ProductForm = (props: ProductFormProps) => {
  const { initialValues, hideModal, setProduct } = props;

  const onSubmit = (product: Product) => {
    hideModal();
    setProduct(product);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="name">
        <input name="id" type="hidden" value={formik.values.id} />
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
