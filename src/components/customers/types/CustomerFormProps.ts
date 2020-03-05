import { Customer } from '../../../models/Customer';

export interface CustomerFormProps {
  initialValues: Customer;
  setCustomer: (customer: Customer) => void;
}