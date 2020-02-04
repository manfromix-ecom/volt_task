import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from './ButtonModal';
import { ProductForm } from './ProductForm';

interface productProps {
  id: number;
  name: string;
  price: number;
}

const products: Array<productProps> = [];
const ProductRows: Array<JSX.Element | null> = products.map(i => {
  const {id, name, price} = i;
  return (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
)});

export const Products: React.FC = () => {
  return (
    <>
      <h1>Product List <ButtonModal title="Add Product" body={<ProductForm />}/></h1>
      <Table hover responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
          {ProductRows}
        </tbody>
      </Table>
    </>
  )
};
