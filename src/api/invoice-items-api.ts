import { AxiosResponse } from 'axios';
import { InvoiceItem } from 'MyModels';
import { apiClient } from './api-client';

const mapToModel = ({ data }: AxiosResponse<any[]>): InvoiceItem[] =>
  data.map((invoice) => ({
    id: invoice.id,
    productId: invoice.productId,
    quantity: invoice.quantity,
  }));

export const invoicesAPI = {
  index(): Promise<InvoiceItem[]> {
    return apiClient.get('invoices/').then((response) => {
      return mapToModel(response);
    });
  },
  show(invoice: InvoiceItem) {
    const { id } = invoice;
    return apiClient.get(`invoices/${id}`);
  },
  create(invoice: InvoiceItem) {
    const { productId, quantity } = invoice;
    return apiClient.post('invoices', { product_id: productId, quantity });
  },
  update(invoice: InvoiceItem) {
    const { id, productId, quantity } = invoice;
    return apiClient.put(`invoices/${id}`, { product_id: productId, quantity });
  },
  delete(invoice: InvoiceItem) {
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
