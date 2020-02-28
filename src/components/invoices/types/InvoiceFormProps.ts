import { Invoice, InvoiceItem } from 'MyModels';

export interface InvoiceFormStateProps {}

export interface InvoiceFormDispatchProps {
  setInvoice: (invoice: Invoice) => void;
  setInvoiceItem: (invoiceItem: InvoiceItem) => void;
}

export interface InvoiceFormOwnProps {
  initialValues: Invoice;
}

export interface InvoiceFormProps extends InvoiceFormStateProps, InvoiceFormDispatchProps, InvoiceFormOwnProps {}
