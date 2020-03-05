import { InvoiceItem } from '../../../models/InvoiceItem';

export interface AddInvoiceItemProps {
  invoiceId: number;
  setInvoiceItem: (invoiceItem: InvoiceItem) => void;
}
