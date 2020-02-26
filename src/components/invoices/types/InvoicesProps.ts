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

export interface InvoiceFormStateProps {
  customers: Customer[];
}

export interface InvoiceFormDispatchProps {
  loadCustomersRequest: () => void;
  setInvoice: (invoice: Invoice) => void;
}

export interface InvoiceFormProps {
  initialValues: Invoice;
  onSubmit: (formData: any) => void;
  customers: Customer[];
  loadCustomersRequest: () => void;
}

export interface InvoiceFormContainerProps extends InvoiceFormStateProps, InvoiceFormDispatchProps {
  invoice: Invoice;
  hideModal: () => void;
}
