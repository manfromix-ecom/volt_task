import { Invoice } from 'MyModels';

export interface InvoicesStateProps {
  invoices: Invoice[];
}
export interface InvoiceDispatchProps {
  loadInvoicesRequest: () => void;
  deleteInvoiceRequest: (invoice: Invoice) => void;
}
export interface InvoicesProps extends InvoicesStateProps, InvoiceDispatchProps {}
