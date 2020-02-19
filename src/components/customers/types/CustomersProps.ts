import { InjectedFormProps } from 'redux-form';
import { Customer } from 'MyModels';

export interface CustomersProps {
  customers: Customer[];
}

export interface CustomerFormProps extends InjectedFormProps<Customer> {}
