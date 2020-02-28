import { AxiosResponse } from 'axios';
import { InvoiceItem } from 'MyModels';
import { apiClient } from './api-client';

const mapToModel = ({ data }: AxiosResponse<any[]>): InvoiceItem[] =>
  data.map((invoice) => ({
    id: invoice.id,
    invoiceId: invoice.invoice_id,
    productId: invoice.product_id,
    quantity: invoice.quantity,
  }));

export const invoiceItemsAPI = {
  index(invoiceId: number): Promise<InvoiceItem[]> {
    return apiClient.get(`invoices/${invoiceId}/items`).then((response) => {
      return mapToModel(response);
    });
  },
  show(invoiceId: number, id: number) {
    return apiClient.get(`invoices/${invoiceId}/items/${id}`);
  },
  create(invoiceItem: InvoiceItem) {
    const { invoiceId, productId, quantity } = invoiceItem;
    return apiClient.post(`invoices/${invoiceId}/items`, { product_id: productId, quantity });
  },
  update(invoiceItem: InvoiceItem) {
    const { invoiceId, id, productId, quantity } = invoiceItem;
    return apiClient.put(`invoices/${invoiceId}/items/${id}`, { product_id: productId, quantity });
  },
  delete(invoiceItem: InvoiceItem) {
    const { invoiceId, id } = invoiceItem;
    return apiClient.delete(`invoices/${invoiceId}/items/${id}`);
  },
};