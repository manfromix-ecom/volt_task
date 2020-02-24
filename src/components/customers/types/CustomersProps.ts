import { Customer } from 'MyModels';

export interface CustomersProps {
  customers: Customer[];
  load: () => void;
  delete: (customer: Customer, id: number) => void;
}

export interface CustomerRowProps {
  customer: Customer;
  hideModal: () => void;
  // delete: (customer: Customer, id: number) => void;
}

export interface CustomerFormProps {
  initialValues: Customer;
  onSubmit: (formData: any) => void;
}
