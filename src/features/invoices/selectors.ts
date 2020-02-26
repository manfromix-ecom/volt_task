import Types from 'MyTypes';
import { Customer, Invoice } from 'MyModels';
import { getCustomer } from '../customers/selectors';

export const getInvoices = (state: Types.RootState) => {
  return state.invoices;
};

export const getInvoice = (state: Types.RootState, id: number) => {
  const invoices = getInvoices(state);
  const invoiceData = invoices.filter((current: Invoice) => current.id === id);
  if (!invoiceData.length) return {} as Customer;
  const [invoice] = invoiceData;
  if (!invoices.customer) {
    invoice.customer = getCustomer(state, invoices.customerId);
  }
  return invoice;
};
