export const getInvoiceItems = (invoice_id: number) => ({
  type: 'GET_INVOICE_ITEMS', payload:
    {invoice_id}
});

export const getInvoiceItem = (invoice_id: number, id: number) => ({
  type: 'GET_INVOICE_ITEM', payload:
    { invoice_id, id }
});

export const addInvoiceItem = (invoice_id: number, product_id: number, quantity: number) => ({
  type: 'ADD_INVOICE_ITEM', payload:
    { invoice_id, product_id, quantity }
});

export const editInvoiceItem = (invoice_id: number, id: number, product_id: number, quantity: number) => ({
  type: 'EDIT_INVOICE_ITEM', payload:
    { invoice_id, id, product_id, quantity }
});

export const deleteInvoiceItem = (invoice_id: number, id: number) => ({
  type: 'DELETE_INVOICE_ITEM', payload:
    { invoice_id, id }
});