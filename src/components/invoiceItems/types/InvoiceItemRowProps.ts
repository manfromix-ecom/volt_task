import { InvoiceItem, Product } from 'MyModels';

export interface InvoiceItemRowProps {
  item: InvoiceItem;
  product: Product;
  form: any;
}
