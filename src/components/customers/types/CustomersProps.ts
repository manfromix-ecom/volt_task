import { Customer } from '../../../models/Customer';

export interface CustomersStateProps {
  customers: Array<Customer>;
}
export interface CustomerDispatchProps {
  deleteCustomerRequest: (customer: Customer) => void;
}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}
