import { Customer, Invoice } from 'MyModels';

export interface InvoiceRowProps extends InvoiceRowStateProps, InvoiceRowOwnProps {
  deleteInvoiceRequest: (invoice: Invoice) => void;
}

export interface InvoiceRowOwnProps {
  invoice: Invoice;
  hideModal: () => void;
}

export interface InvoiceRowStateProps {
  customer: Customer;
}
