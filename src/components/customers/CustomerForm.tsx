import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Customer } from 'MyModels';
import { CustomerFormProps } from './types/CustomerFormProps';

export const CustomerForm = (props: CustomerFormProps) => {
  const { initialValues, hideModal, setCustomer } = props;

  const onSubmit = (customer: Customer) => {
    hideModal();
    setCustomer(customer);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="name">
        <input name="id" type="hidden" value={formik.values.id || ''} />
        <Form.Label column={false}>Name</Form.Label>
        <Form.Control name="name" type="text" value={formik.values.name} onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label column={false}>Address</Form.Label>
        <Form.Control name="address" type="text" value={formik.values.address} onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label column={false}>Phone</Form.Label>
        <Form.Control name="phone" type="text" value={formik.values.phone} onChange={formik.handleChange} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};
