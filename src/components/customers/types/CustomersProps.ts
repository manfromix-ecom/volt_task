import { Customer } from 'MyModels';

export interface CustomersProps {
  customers: Customer[];
}

export interface CustomerFormProps {
  initialValues: Customer;
  onSubmit: (formData: any) => void;
}
