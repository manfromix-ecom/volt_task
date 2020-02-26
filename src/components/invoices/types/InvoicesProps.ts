import { Invoice } from 'MyModels';

export interface InvoicesStateProps {
  invoices: Invoice[];
}
export interface InvoiceDispatchProps {
  loadInvoicesRequest: () => void;
}
export interface InvoicesProps extends InvoicesStateProps, InvoiceDispatchProps {}
