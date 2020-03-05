export type Customer = {
  id?: number;
  name: string;
  address: string;
  phone: string;
  editing?: boolean;
};

export type apiCustomer = {
  id: number;
  name: string;
  address: string;
  phone: string;
};
