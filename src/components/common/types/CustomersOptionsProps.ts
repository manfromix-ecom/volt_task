import { Customer } from '../../../models/Customer';

export interface CustomersOptionsProps extends CustomersOptionsStateProps, CustomersOptionsDispatchProps {}

export interface CustomersOptionsStateProps {
  customers: Array<Customer>;
}

export interface CustomersOptionsDispatchProps {}
