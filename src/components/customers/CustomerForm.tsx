import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CustomerFormProps } from './types/CustomerFormProps';
import { hideModal } from '../../utils/hideModal';
import { Customer } from '../../models/Customer';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length > 200) {
    errors.address = 'Must be 200 characters or less';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)) {
    errors.email = 'Invalid phone';
  }

  return errors;
};

export const CustomerForm: React.FC<CustomerFormProps> = (props: CustomerFormProps) => {
  const { initialValues, setCustomer } = props;

  const onSubmit = (customer: Customer) => {
    hideModal();
    setCustomer(customer);
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
      <Form.Group controlId="address">
        <Form.Label column={false}>Address</Form.Label>
        <Form.Control name="address" type="text" value={form.values.address} onChange={form.handleChange} />
        {form.errors.address ? <div className="error">{form.errors.address}</div> : null}
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label column={false}>Phone</Form.Label>
        <Form.Control name="phone" type="text" value={form.values.phone} onChange={form.handleChange} />
        {form.errors.phone ? <div className="error">{form.errors.phone}</div> : null}
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Save
      </Button>
    </Form>
  );
};
