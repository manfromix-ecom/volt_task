import { AxiosResponse } from 'axios';
import { Customer } from 'MyModels';
import { apiClient } from './api-client';

const mapToModel = ({ data }: AxiosResponse<any[]>): Customer[] =>
  data.map((customer) => ({
    id: customer.id,
    name: customer.name,
    address: customer.address,
    phone: customer.phone,
  }));

export const customersAPI = {
  index(): Promise<Customer[]> {
    return apiClient
      .get('customers/')
      .then((response) => {
        return mapToModel(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        return [] as Customer[];
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
      // eslint-disable-next-line no-console
      console.log(error);
    });
  },
};
