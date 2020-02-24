import { Customer } from 'MyModels';

export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}

export interface CustomersStateProps {
  customers: Customer[];
}
export interface CustomerRowProps {
  customer: Customer;
  hideModal: () => void;
  // delete: (customer: Customer, id: number) => void;
}

export interface CustomerDispatchProps {
  loadCustomersRequest: () => void;
  deleteCustomerRequest: (customer: Customer, id: number) => void;
}

export interface CustomerFormProps {
  initialValues: Customer;
  onSubmit: (formData: any) => void;
}
