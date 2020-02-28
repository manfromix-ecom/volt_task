import Types from 'MyTypes';
import { Customer } from 'MyModels';

export const getCustomers = (state: Types.RootState) => {
  return state.customers;
};

export const getCustomer = (state: Types.RootState, id: number) => {
  const customersFiltered = state.customers.filter((current: Customer) => current.id === id);
  return customersFiltered.length ? customersFiltered[0] : {};
};
