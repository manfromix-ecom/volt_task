import { Customer } from '../../../models/Customer';

export interface CustomerFormStateProps {}

export interface CustomerFormDispatchProps {
  setCustomer: (customer: Customer) => void;
}

export interface CustomerFormProps extends CustomerFormStateProps, CustomerFormDispatchProps {
  initialValues: Customer;
}
