import Types from 'MyTypes';
import { Invoice } from '../models/Invoice';
import { InvoiceItem } from '../models/InvoiceItem';
import { getInvoiceItems } from './invoiceItems';

export const getTotal = (state: Types.RootState, id: number, items?: Array<InvoiceItem>) => {
  let total = 0;
  if (!items && !state.products.length) {
    const invoice = state.invoices.filter((current: Invoice) => current.id === id);
    if (invoice.length) total = invoice[0].total;
    return total;
  }
  const invoiceItems: Array<InvoiceItem> = items || getInvoiceItems(state, id);
  total = invoiceItems.reduce((sum, current) => {
    if (!(current.product && current.product.price)) return sum;
    const add = Number(current.quantity) * Number(current.product.price);
    return sum + add;
  }, 0);
  return parseFloat(total.toFixed(2));
};

export const getInvoices = (state: Types.RootState) => {
  if (!state.invoices.length) return state.invoices;
  return state.invoices.map((invoice: Invoice) => {
    return {
      ...invoice,
      total: getTotal(state, invoice.id || 0),
    };
  });
};