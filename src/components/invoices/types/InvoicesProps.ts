import { Invoice } from '../../../models/Invoice';
import { Customer } from '../../../models/Customer';

export interface InvoicesStateProps {
  invoices: Array<Invoice>;
  customers: Array<Customer>;
}
export interface InvoiceDispatchProps {}
export interface InvoicesProps extends InvoicesStateProps, InvoiceDispatchProps {}
