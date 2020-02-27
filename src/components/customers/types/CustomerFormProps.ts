import { Customer } from 'MyModels';

export interface CustomerFormProps {
  initialValues: Customer;
  setCustomer: (customer: Customer) => void;
}