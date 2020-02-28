declare module 'MyModels' {
  export type Invoice = {
    id?: number;
    customerId: number;
    discount: number;
    total: number;
    editing?: boolean;
    customer?: Customer;
    items?: number[];
  };
}
