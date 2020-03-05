import { Customer } from './Customer';
import { InvoiceItem } from './InvoiceItem';

export type Invoice = {
  id?: number;
  customerId: number;
  discount: number;
  total: number;
  editing?: boolean;
  customer?: Customer;
  items?: Array<InvoiceItem>;
};

export type apiInvoice = {
  id: number;
  // eslint-disable-next-line camelcase
  customer_id: number;
  discount: number;
  total: number;
};
