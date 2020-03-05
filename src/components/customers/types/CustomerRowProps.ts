import { Customer } from '../../../models/Customer';

export interface CustomerRowProps {
  customer: Customer;
  deleteCustomerRequest: (customer: Customer) => void;
}
