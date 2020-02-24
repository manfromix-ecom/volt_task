import { Customer } from 'MyModels';

export interface CustomerContainerProps {
  customer: Customer;
  setCustomer: (customer: Customer) => void;
  hideModal: () => void;
}
