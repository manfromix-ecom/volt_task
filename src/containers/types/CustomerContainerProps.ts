import { Customer } from 'MyModels';

export interface CustomerContainerProps {
  customer: Customer;
  setCustomer: (customer: Customer, id: number | undefined) => void;
  hideModal: () => void;
}
