export let state = {
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
  invoice_items: [],
  invoices: [],
};