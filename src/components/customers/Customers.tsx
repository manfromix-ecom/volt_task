import { Customer } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../ButtonModal';
import { customersAPI } from '../../api/customers-api';
import { CustomerFormContainer } from '../../containers/CustomerFormContainer';
import { deleteCustomerRequest } from '../../features/customers/reducer';

export const Customers: React.FC = () => {
  document.title = 'Customers';

  const useCustomersCollection = () => {
    const [customerCollection, setCustomerCollection] = React.useState<Customer[]>([]);

    const loadCustomerCollection = () => {
      customersAPI.index().then((collection) => setCustomerCollection(collection));
    };

    return { customerCollection, loadCustomerCollection };
  };

  const { customerCollection, loadCustomerCollection } = useCustomersCollection();

  React.useEffect(() => {
    loadCustomerCollection();
  }, []);

  return (
    <>
      <h1>
        Customer List
        <ButtonModal title="Add Customer" body={<CustomerFormContainer customer={{} as Customer} />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerCollection.map((customer) => (
            <CustomerRow key={customer.id} customer={customer} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const { id, name, address, phone } = customer;
  const onDelete = () => {
    deleteCustomerRequest(customer);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Customer" buttonText="Edit" body={<CustomerFormContainer customer={customer} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
