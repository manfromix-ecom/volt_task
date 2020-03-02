import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Product } from 'MyModels';
import { ProductFormProps } from './types/ProductFormProps';
import { hideModal } from '../../utils/hideModal';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (Number.isNaN(Number(values.price))) {
    errors.price = 'Invalid price';
  }

  return errors;
};

export const ProductForm = (props: ProductFormProps) => {
  const { initialValues, setProduct } = props;

  const onSubmit = (product: Product) => {
    hideModal();
    setProduct(product);
  };

  const form = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Form onSubmit={form.handleSubmit}>
      <Form.Group controlId="name">
        <input name="id" type="hidden" value={form.values.id || ''} />
        <Form.Label column={false}>Name</Form.Label>
        <Form.Control name="name" type="text" value={form.values.name} onChange={form.handleChange} />
        {form.errors.name ? <div className="error">{form.errors.name}</div> : null}
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label column={false}>Price</Form.Label>
        <Form.Control name="price" type="text" value={form.values.price} onChange={form.handleChange} />
        {form.errors.price ? <div className="error">{form.errors.price}</div> : null}
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};
