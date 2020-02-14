import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControl.module.scss';

interface FormProps {
  input: string[];
  meta: {
    touched: boolean;
    error: string;
  };
  children: JSX.Element;
}

const FormControl: React.FunctionComponent<FormProps> = ({ meta: { touched, error }, children }: FormProps) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string,
  name: string,
  validators: any[],
  component: React.FunctionComponent,
  props = {},
  text = ''
) => (
  <div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} /> {text}
  </div>
);
