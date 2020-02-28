declare module 'MyModels' {
  export type InvoiceItem = {
    id?: number;
    invoiceId: number;
    productId: number;
    quantity?: number;
    editing?: boolean;
  };
}
