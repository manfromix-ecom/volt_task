import { Customer } from 'MyModels';

export interface CustomersStateProps {
  customers: Customer[];
}
export interface CustomerDispatchProps {
  loadCustomersRequest: () => void;
  deleteCustomerRequest: (customer: Customer) => void;
}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}
