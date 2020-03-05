import { Customer } from '../../../models/Customer';

export interface CustomersStateProps {
  customers: Array<Customer>;
}
export interface CustomerDispatchProps {}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}