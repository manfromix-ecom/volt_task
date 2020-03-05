import { InvoiceItem } from '../../../models/InvoiceItem';

export interface AddInvoiceItemStateProps {}

export interface AddInvoiceItemDispatchProps {
  setInvoiceItem: (invoiceItem: InvoiceItem) => void;
}

export interface AddInvoiceItemProps extends AddInvoiceItemStateProps, AddInvoiceItemDispatchProps {
  invoiceId: number;
}
