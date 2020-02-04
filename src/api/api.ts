import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://yoursite.com/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const customersAPI = {
  index() {
    return apiClient.get(`api/customers/`);
  },
  show(id: number) {
    return apiClient.get(`api/customers/${id}`);
  },
  create(name: string, address: string, phone: string) {
    return apiClient.post(`api/customers`, { name, address, phone });
  },
  update(id: number, name: string, address: string, phone: string) {
    return apiClient.put(`api/customers/${id}`, { name, address, phone });
  },
  delete(id: number) {
    return apiClient.delete(`api/customers/${id}`);
  },
};

export const productsAPI = {
  index() {
    return apiClient.get(`api/products/`);
  },
  show(id: number) {
    return apiClient.get(`api/products/${id}`);
  },
  create(name: string, price: number) {
    return apiClient.post(`api/products`, { name, price });
  },
  update(id: number, name: string, price: number) {
    return apiClient.put(`api/products/${id}`, { name, price });
  },
  delete(id: number) {
    return apiClient.delete(`api/products/${id}`);
  },
};

export const invoicesAPI = {
  index() {
    return apiClient.get(`api/invoices`);
  },
  show(id: number) {
    return apiClient.get(`api/invoices/${id}`);
  },
  create(customer_id: number, discount: number, total: number) {
    return apiClient.post(`api/invoices`, { customer_id, discount, total });
  },
  update(id: number, customer_id: number, discount: number, total: number) {
    return apiClient.put(`api/invoices/${id}`, { customer_id, discount, total });
  },
  delete(id: number) {
    return apiClient.delete(`api/invoices/${id}`);
  },
};

export const invoiceItemsAPI = {
  index(invoice_id: number) {
    return apiClient.get(`api/invoices/${invoice_id}/items`);
  },
  show(invoice_id: number, id: number) {
    return apiClient.get(`api/invoices/${invoice_id}/items/${id}`);
  },
  create(invoice_id: number, product_id: number, quantity: number) {
    return apiClient.post(`api/invoices/${invoice_id}/items`, { product_id, quantity });
  },
  update(invoice_id: number, id: number, product_id: number, quantity: number) {
    return apiClient.put(`api/invoices/${invoice_id}/items/${id}`, { product_id, quantity });
  },
  delete(invoice_id: number, id: number) {
    return apiClient.delete(`api/invoices/${invoice_id}/items/${id}`);
  },
};