import { Customer } from 'MyModels';

export interface CustomerRowProps {
  customer: Customer;
  hideModal: () => void;
}

export interface CustomersStateProps {
  customers: Customer[];
}
export interface CustomerDispatchProps {
  loadCustomersRequest: () => void;
  deleteCustomerRequest: (customer: Customer) => void;
}
export interface CustomersProps extends CustomersStateProps, CustomerDispatchProps {}

export interface CustomerFormProps {
  initialValues: Customer;
  onSubmit: (formData: any) => void;
}

export interface CustomerFormContainerProps {
  customer: Customer;
  setCustomer: (customer: Customer) => void;
  hideModal: () => void;
}
