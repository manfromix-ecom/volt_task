import { Product } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../ButtonModal';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { deleteProductRequest } from '../../features/products/reducer';
import { ProductsProps } from './types/ProductsProps';

const ProductRow = ({ product }: { product: Product }) => {
  const { id, name, price } = product;
  const onDelete = () => {
    deleteProductRequest(product);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Product" buttonText="Edit" body={<ProductFormContainer product={product} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export const PureProducts = (props: ProductsProps) => {
  document.title = 'Products';
  const { products } = props;

  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product" body={<ProductFormContainer product={{} as Product} />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const Products = React.memo(PureProducts);
