import { Customer, Invoice } from 'MyModels';

export interface InvoiceRowProps {
  invoice: Invoice;
  hideModal: () => void;
}

export interface InvoicesStateProps {
  invoices: Invoice[];
}
export interface InvoiceDispatchProps {
  loadInvoicesRequest: () => void;
  deleteInvoiceRequest: (invoice: Invoice) => void;
}
export interface InvoicesProps extends InvoicesStateProps, InvoiceDispatchProps {}

export interface InvoiceFormProps {
  initialValues: Invoice;
  onSubmit: (formData: any) => void;
  customers?: Customer[];
  loadCustomersRequest?: () => void;
}

export interface InvoiceFormContainerProps {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
  hideModal: () => void;
}
