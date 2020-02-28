declare module 'MyModels' {
  export type Customer = {
    id?: number;
    name: string;
    address: string;
    phone: string;
    editing?: boolean;
  };
}
