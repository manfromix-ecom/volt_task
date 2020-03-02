import { Invoice } from 'MyModels';

export interface InvoiceFormStateProps {}

export interface InvoiceFormDispatchProps {
  setInvoiceWithItems: (invoice: Invoice) => void;
}

export interface InvoiceFormOwnProps {
  initialValues: Invoice;
}

export interface InvoiceFormProps extends InvoiceFormStateProps, InvoiceFormDispatchProps, InvoiceFormOwnProps {}
