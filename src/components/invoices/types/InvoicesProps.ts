import { Invoice } from 'MyModels';

export interface InvoicesProps {
  invoices: Invoice[];
}

export interface InvoiceFormProps {
  initialValues: Invoice;
  onSubmit: (formData: any) => void;
}
