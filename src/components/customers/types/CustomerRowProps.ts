import { Customer } from 'MyModels';

export interface CustomerRowProps {
  customer: Customer;
  deleteCustomerRequest: (customer: Customer) => void;
  hideModal: () => void;
}
