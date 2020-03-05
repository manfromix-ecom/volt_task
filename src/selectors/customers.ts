import Types from 'MyTypes';

export const getCustomers = (state: Types.RootState) => {
  return state.customers;
};
