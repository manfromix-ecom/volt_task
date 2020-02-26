import { Invoice } from 'MyModels';

export interface InvoiceFormStateProps {}

export interface InvoiceFormDispatchProps {
  setInvoice: (invoice: Invoice) => void;
}

export interface InvoiceFormProps extends InvoiceFormDispatchProps, InvoiceFormStateProps {
  initialValues: Invoice;
  hideModal: () => void;
}
