declare module 'MyModels' {
  export type InvoiceItem = {
    id?: number;
    productId: number;
    quantity: number;
    editing?: boolean;
  };
}
