import { Invoice } from '../../../models/Invoice';
import { Customer } from '../../../models/Customer';

export interface InvoicesStateProps {
  invoices: Array<Invoice>;
  customers: Array<Customer>;
}
export interface InvoicesDispatchProps {
  deleteInvoiceRequest: (invoice: Invoice) => void;
}
export interface InvoicesProps extends InvoicesStateProps, InvoicesDispatchProps {}
