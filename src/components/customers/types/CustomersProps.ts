import { Customer } from 'MyModels';

export interface CustomersStateProps {
  customers: Customer[];
}
export interface CustomerDispatchProps {
  loadCustomersRequest: () => void;
}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}
