import { InvoiceItem } from 'MyModels';

export interface AddInvoiceItemProps {
  invoiceId: number;
  setInvoiceItem: (invoiceItem: InvoiceItem) => void;
}
