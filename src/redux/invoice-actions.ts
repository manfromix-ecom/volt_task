export const addInvoice = (discount: number | null, customerId: number | null) => ({
  type: 'ADD_INVOICE', payload:
    { discount, customerId }
});

export const editInvoice = (id: number | null, qty: number | null) => ({
  type: 'EDIT_INVOICE', payload:
    { id, qty }
});