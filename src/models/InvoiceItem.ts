import { Product } from './Product';

export type InvoiceItem = {
  id?: number;
  invoiceId: number;
  productId: number;
  quantity?: number;
  product?: Product;
  editing?: boolean;
};

export type apiInvoiceItem = {
  id: number;
  // eslint-disable-next-line camelcase
  invoice_id: number;
  // eslint-disable-next-line camelcase
  product_id: number;
  quantity: number;
};
