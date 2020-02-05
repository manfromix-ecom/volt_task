import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from './ButtonModal';
import { CustomerForm } from './CustomerForm';
import { fakeState } from '../redux/fakeState';

interface customerProps {
  id?: number;
  name?: string;
  address?: string;
  phone?: string;
}

const customers: Array<customerProps> = fakeState.customers;
const CustomerRows: Array<JSX.Element | null> = customers.map(i => {
  const { id, name, address, phone } = i;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  );
});

export const Customers: React.FC = () => {
  return (
    <>
      <h1>Customer List <ButtonModal title="Add Customer" body={<CustomerForm/>}/></h1>
      <Table hover responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {CustomerRows}
        </tbody>
      </Table>
    </>
  );
};
