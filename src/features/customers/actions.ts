import { Customer } from 'MyModels';
import { CREATE_CUSTOMER_REQUEST, DELETE_CUSTOMER_REQUEST, SET_CUSTOMER_REQUEST, UPDATE_CUSTOMER_REQUEST } from './constants';

export const addCustomerCreator = (customer: Customer) => ({ type: CREATE_CUSTOMER_REQUEST, customer });
export const updateCustomerCreator = (customer: Customer, id: number | undefined) => ({ type: UPDATE_CUSTOMER_REQUEST, customer, id });
export const deleteCustomerCreator = (customer: Customer, id: number | undefined) => ({ type: DELETE_CUSTOMER_REQUEST, customer, id });
export const setCustomersCreator = (customer: Customer, id: number | undefined) => ({ type: SET_CUSTOMER_REQUEST, customer, id });
