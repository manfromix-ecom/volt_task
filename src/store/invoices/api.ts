/* eslint no-console: off */
import { AxiosResponse } from 'axios';
import { apiClient } from '../apiClient';
import { apiInvoice, Invoice } from '../../models/Invoice';

const mapToModel = ({ data }: AxiosResponse<Array<apiInvoice>>): Array<Invoice> =>
  data.map((invoice) => ({
    id: invoice.id,
    customerId: invoice.customer_id,
    discount: invoice.discount,
    total: invoice.total,
  }));

export const invoicesAPI = {
  index(): Promise<Array<Invoice>> {
    return apiClient.get('invoices/').then((response) => {
      return mapToModel(response);
    });
  },
  show(invoice: Invoice) {
    const { id } = invoice;
    return apiClient.get(`invoices/${id}`);
  },
  create(invoice: Invoice) {
    const { customerId, discount, total } = invoice;
    return apiClient.post('invoices', { customer_id: customerId, discount, total });
  },
  update(invoice: Invoice) {
    const { id, customerId, discount, total } = invoice;
    return apiClient.put(`invoices/${id}`, { customer_id: customerId, discount, total });
  },
  delete(invoice: Invoice) {
    const { id } = invoice;
    return apiClient.delete(`invoices/${id}`, {}).catch((error) => {
      console.log(error);
    });
  },
};
