import React from 'react';
import Form from 'react-bootstrap/Form';
import { FieldInputProps } from './types/FieldInputProps';

export const FieldInput = ({ input, type, placeholder, as = 'input', plaintext = false, children = null }: FieldInputProps) => {
  console.log('FieldInput', input, type);
  const { value, onChange } = input;
  return (
    <Form.Control type={type} placeholder={placeholder} defaultValue={value} as={as} plaintext={plaintext} onChange={onChange}>
      {children}
    </Form.Control>
  );
};
