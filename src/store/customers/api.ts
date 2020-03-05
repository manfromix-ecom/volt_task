/* eslint no-console: off */
import { AxiosResponse } from 'axios';
import { apiClient } from '../apiClient';
import { apiCustomer, Customer } from '../../models/Customer';

const mapToModel = ({ data }: AxiosResponse<Array<apiCustomer>>): Array<Customer> =>
  data.map((customer) => ({
    id: customer.id,
    name: customer.name,
    address: customer.address,
    phone: customer.phone,
  }));

export const customersAPI = {
  index(): Promise<Array<Customer>> {
    return apiClient
      .get('customers/')
      .then((response) => {
        return mapToModel(response);
      })
      .catch((error) => {
        console.log(error);
        return [] as Array<Customer>;
      });
  },
  show(customer: Customer) {
    const { id } = customer;
    return apiClient.get(`customers/${id}`);
  },
  create(customer: Customer) {
    const { name, address, phone } = customer;
    return apiClient.post('customers', { name, address, phone });
  },
  update(customer: Customer) {
    const { id, name, address, phone } = customer;
    return apiClient.put(`customers/${id}`, { name, address, phone });
  },
  delete(customer: Customer) {
    const { id } = customer;
    return apiClient.delete(`customers/${id}`, {}).catch((error) => {
      console.log(error);
    });
  },
};
