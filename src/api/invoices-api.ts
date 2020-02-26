import { AxiosResponse } from 'axios';
import { Invoice } from 'MyModels';
import { apiClient } from './api-client';

const mapToModel = ({ data }: AxiosResponse<any[]>): Invoice[] =>
  data.map((invoice) => ({
    id: invoice.id,
    customerId: invoice.customer_id,
    discount: invoice.discount,
    total: invoice.total,
  }));

export const invoicesAPI = {
  index(): Promise<Invoice[]> {
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
    console.log('invoicesAPI.delete', invoice);
    return apiClient
      .delete(`invoices/${id}`, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
