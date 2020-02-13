import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productsAPI = {
  index() {
    return apiClient.get('products/');
  },
  show(id: number) {
    return apiClient.get(`products/${id}`);
  },
  create(name: string, price: number) {
    return apiClient.post('products', { name, price });
  },
  update(id: number, name: string, price: number) {
    return apiClient.put(`products/${id}`, { name, price });
  },
  delete(id: number) {
    return apiClient.delete(`products/${id}`);
  },
};

export const invoicesAPI = {
  index() {
    return apiClient.get('invoices');
  },
  show(id: number) {
    return apiClient.get(`invoices/${id}`);
  },
  create(customerId: number, discount: number, total: number) {
    return apiClient.post('invoices', { customer_id: customerId, discount, total });
  },
  update(id: number, customerId: number, discount: number, total: number) {
    return apiClient.put(`invoices/${id}`, { customer_id: customerId, discount, total });
  },
  delete(id: number) {
    return apiClient.delete(`invoices/${id}`);
  },
};

export const invoiceItemsAPI = {
  index(invoiceId: number) {
    return apiClient.get(`invoices/${invoiceId}/items`);
  },
  show(invoiceId: number, id: number) {
    return apiClient.get(`invoices/${invoiceId}/items/${id}`);
  },
  create(invoiceId: number, productId: number, quantity: number) {
    return apiClient.post(`invoices/${invoiceId}/items`, { product_id: productId, quantity });
  },
  update(invoiceId: number, id: number, productId: number, quantity: number) {
    return apiClient.put(`invoices/${invoiceId}/items/${id}`, { product_id: productId, quantity });
  },
  delete(invoiceId: number, id: number) {
    return apiClient.delete(`invoices/${invoiceId}/items/${id}`);
  },
};
