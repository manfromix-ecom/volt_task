import { Customer } from 'MyModels';

export interface CustomerRowProps {
  customer: Customer;
  hideModal: () => void;
}