import { Customer, Invoice } from 'MyModels';

export interface InvoiceRowProps extends InvoiceRowStateProps, InvoiceRowOwnProps {
  deleteInvoiceRequest: (invoice: Invoice) => void;
}

export interface InvoiceRowOwnProps {
  invoice: Invoice;
  customer: Customer;
}

export interface InvoiceRowStateProps {}
