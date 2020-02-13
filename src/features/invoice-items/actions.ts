export const getInvoiceItems = (invoiceId: number) => ({
  type: 'GET_INVOICE_ITEMS',
  payload: { invoiceId },
});

export const getInvoiceItem = (invoiceId: number, id: number) => ({
  type: 'GET_INVOICE_ITEM',
  payload: { invoiceId, id },
});

export const addInvoiceItem = (invoiceId: number, productId: number, quantity: number) => ({
  type: 'ADD_INVOICE_ITEM',
  payload: { invoiceId, productId, quantity },
});

export const editInvoiceItem = (invoiceId: number, id: number, productId: number, quantity: number) => ({
  type: 'EDIT_INVOICE_ITEM',
  payload: { invoiceId, id, productId, quantity },
});

export const deleteInvoiceItem = (invoiceId: number, id: number) => ({
  type: 'DELETE_INVOICE_ITEM',
  payload: { invoiceId, id },
});
