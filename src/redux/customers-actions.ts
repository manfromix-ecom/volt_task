export const getCustomers = () => ({
  type: 'GET_CUSTOMERS', payload:
    {}
});

export const getCustomer = (id: number) => ({
  type: 'GET_CUSTOMER', payload:
    { id }
});

export const addCustomer = (name: string, address: string | null, phone: string | null) => ({
  type: 'ADD_CUSTOMER', payload:
    { name, address, phone }
});

export const editCustomer = (id: number, name: string, address: string | null, phone: string | null) => ({
  type: 'EDIT_CUSTOMER', payload:
    { id, name, address, phone }
});

export const deleteCustomer = (id: number) => ({
  type: 'DELETE_CUSTOMER', payload:
    { id }
});