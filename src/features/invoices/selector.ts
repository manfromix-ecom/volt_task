import Types from 'MyTypes';
import { Customer, Invoice } from 'MyModels';

export const getInvoices = (state: Types.RootState) => {
  return state.invoices;
};

export const getInvoice = (state: Types.RootState, id: number) => {
  const { invoices, customers } = state;
  const invoiceData = invoices.filter((current: Invoice) => current.id === id);
  if (!invoiceData.length) return {} as Customer;
  const [invoice] = invoiceData;
  if (!invoices.customer) {
    const customer = customers.filter((current: Customer) => current.id === invoice.customerId);
    // eslint-disable-next-line prefer-destructuring
    if (customer.length) invoice.customer = customer[0];
  }
  return invoice;
};
