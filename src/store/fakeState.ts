export let fakeState = {
  customers: [
    { id: 1, name: 'Mark Benson', address: '353 Rochester St, Rialto FL 43250', phone: '555-534-2342' },
    { id: 2, name: 'Bob Smith', address: '215 Market St, Dansville CA 94325', phone: '555-534-2342' },
    { id: 3, name: 'John Draper', address: '890 Main St, Fontana IL 31450', phone: '555-534-2342' },
  ],
  products: [
    { id: 1, name: 'Parachute Pants', price: 29.99 },
    { id: 2, name: 'Phone Holder', price: 9.99 },
    { id: 3, name: 'Pet Rock', price: 5.99 },
    { id: 4, name: 'Egg Timer', price: 15.99 },
    { id: 5, name: 'Neon Green Hat', price: 21.99 },
  ],
  invoice_items: [
    { id: 1, customer_id: 1, discount: 0.99, total: 59.98 },
  ],
  invoices: [
    { id: 1, invoice_id: 1, product_id: 1, quantity: 2 },
  ],
};

/*export const fakeState = {
  customers: [],
  products: [],
  invoice_items: [],
  invoices: [],
};*/
