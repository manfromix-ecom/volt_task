export const getProducts = () => ({
  type: 'GET_PRODUCTS', payload:
    {}
});

export const getProduct = (id: number) => ({
  type: 'GET_PRODUCT', payload:
    { id }
});

export const addProduct = (name: string, price: number | null) => ({
  type: 'ADD_PRODUCT', payload:
    { name, price }
});

export const editProduct = (id: number, name: string | null, price: number | null) => ({
  type: 'EDIT_PRODUCT', payload:
    { id, name, price }
});

export const deleteProduct = (id: number) => ({
  type: 'DELETE_PRODUCT', payload:
    { id }
});