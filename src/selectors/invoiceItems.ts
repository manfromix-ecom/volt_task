import Types from 'MyTypes';
import { InvoiceItem } from '../models/InvoiceItem';
import { getProduct } from './products';

export const getInvoiceItems = (state: Types.RootState, id: number) => {
  let items = state.invoiceItems.filter((current: InvoiceItem) => current.invoiceId === id);
  items = items.map((item: InvoiceItem) => {
    item.product = getProduct(state, item.productId);
    return item;
  });
  return items;
};
