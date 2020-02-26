import { Customer } from 'MyModels';

export interface CustomersStateProps {
  customers: Customer[];
}
export interface CustomerDispatchProps {}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}