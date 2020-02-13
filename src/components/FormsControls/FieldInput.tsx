import React from 'react';
import Form from 'react-bootstrap/Form';

interface iInput {
  value: string;
  onChange: (args: any) => void;
}

interface FormProps {
  input: iInput;
  meta: {
    touched: boolean;
    error: string;
  };
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const FieldInput = ({ input, type, placeholder, min, max }: FormProps) => {
  const { value, onChange } = input;
  console.log('FieldInput', input);
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};