import { Customer, Invoice } from 'MyModels';

export interface InvoicesStateProps {
  invoices: Invoice[];
  customers: Customer[];
}
export interface InvoiceDispatchProps {}
export interface InvoicesProps extends InvoicesStateProps, InvoiceDispatchProps {}
