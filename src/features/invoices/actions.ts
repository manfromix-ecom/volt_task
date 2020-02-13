export const getInvoices = () => ({
  type: 'GET_INVOICES',
  payload: {},
});

export const getInvoice = (id: number) => ({
  type: 'GET_INVOICE',
  payload: { id },
});

export const addInvoice = (customerId: number, discount: number, total: number) => ({
  type: 'ADD_INVOICE',
  payload: { customerId, discount, total },
});

export const editInvoice = (id: number, customerId: number, discount: number, total: number) => ({
  type: 'EDIT_INVOICE',
  payload: { id, customerId, discount, total },
});

export const deleteInvoice = (id: number) => ({
  type: 'DELETE_INVOICE',
  payload: { id },
});
