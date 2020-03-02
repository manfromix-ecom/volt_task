import Types from 'MyTypes';
import { Invoice, InvoiceItem } from 'MyModels';
import { getProduct } from '../products/selectors';

export const getInvoiceItems = (state: Types.RootState, id: number) => {
  let items = state.invoiceItems.filter((current: InvoiceItem) => current.invoiceId === id);
  items = items.map((item: InvoiceItem) => {
    item.product = getProduct(state, item.productId);
    return item;
  });
  return items;
};

export const getTotal = (state: Types.RootState, id: number, items?: InvoiceItem[]) => {
  let total = 0;
  if (!items && !state.products.length) {
    const invoice = state.invoices.filter((current: Invoice) => current.id === id);
    if (invoice.length) total = invoice[0].total;
    return total;
  }
  const invoiceItems: InvoiceItem[] = items || getInvoiceItems(state, id);
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