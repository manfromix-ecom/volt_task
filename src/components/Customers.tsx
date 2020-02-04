import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from './ButtonModal';
import { CustomerForm } from './CustomerForm';

interface customerProps {
  id: number;
  name: string;
  address: number;
  phone: number;
}

const customers: Array<customerProps> = [];
const CustomerRows: Array<JSX.Element | null> = customers.map(i => {
  const { id, address, phone } = i;
  return (
    <tr>
      <td>{id}</td>
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
