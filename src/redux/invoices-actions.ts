export const getInvoices = () => ({
  type: 'GET_INVOICES', payload:
    {}
});

export const getInvoice = (id: number) => ({
  type: 'GET_INVOICE', payload:
    { id }
});

export const addInvoice = (customer_id: number, discount: number, total: number) => ({
  type: 'ADD_INVOICE', payload:
    { customer_id, discount, total }
});

export const editInvoice = (id: number, customer_id: number, discount: number, total: number) => ({
  type: 'EDIT_INVOICE', payload:
    { id, customer_id, discount, total }
});

export const deleteInvoice = (id: number) => ({
  type: 'DELETE_INVOICE', payload:
    { id }
});