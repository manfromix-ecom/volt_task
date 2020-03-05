import { Invoice } from '../../../models/Invoice';
import { Customer } from '../../../models/Customer';

export interface InvoiceRowProps extends InvoiceRowStateProps, InvoiceRowDispatchProps, InvoiceRowOwnProps {}

export interface InvoiceRowOwnProps {
  invoice: Invoice;
  customer: Customer;
}

export interface InvoiceRowStateProps {}

export interface InvoiceRowDispatchProps {
  deleteInvoiceRequest: (invoice: Invoice) => void;
  setInvoice: (invoice: Invoice) => void;
}