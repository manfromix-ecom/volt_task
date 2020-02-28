import { InvoiceItem, Product } from 'MyModels';

export interface InvoiceItemsStateProps {
  invoiceItems: InvoiceItem[];
  products: Product[];
}

export interface InvoiceItemsDispatchProps {
  setInvoiceItem: (invoiceItem: InvoiceItem) => void;
}

export interface InvoiceItemsProps extends InvoiceItemsDispatchProps, InvoiceItemsStateProps {
  invoiceId: number;
  form: any;
}
