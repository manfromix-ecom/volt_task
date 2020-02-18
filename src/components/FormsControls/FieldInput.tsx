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
  as?: any;
  plaintext?: boolean;
  children?: JSX.Element | null;
}

export const FieldInput = ({ input, type, placeholder, as = 'input', plaintext = false, children = null }: FormProps) => {
  const { value, onChange } = input;
  return (
    <Form.Control type={type} placeholder={placeholder} defaultValue={value} as={as} plaintext={plaintext} onChange={onChange}>
      {children}
    </Form.Control>
  );
};
