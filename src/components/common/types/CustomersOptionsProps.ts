import { Customer } from 'MyModels';

export interface CustomersOptionsProps extends CustomersOptionsStateProps, CustomersOptionsDispatchProps {}

export interface CustomersOptionsStateProps {
  customers: Customer[];
}

export interface CustomersOptionsDispatchProps {}