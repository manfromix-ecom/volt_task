import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ButtonModal } from '../common/ButtonModal';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { ProductsProps } from './types/ProductsProps';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../models/Product';

export const Products = (props: ProductsProps) => {
  document.title = 'Products';
  useProducts();
  const { products, deleteProductRequest } = props;

  const newProduct: Product = { name: '', price: 0 };
  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product">
          <ProductFormContainer initialValues={newProduct} />
        </ButtonModal>
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
          {products &&
            products.map((product) => {
              const { id, name, price } = product;
              const onDelete = () => {
                deleteProductRequest(product);
              };
              return (
                <tr key={product.id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <ButtonGroup>
                      <ButtonModal title="Edit Product" buttonText="Edit">
                        <ProductFormContainer initialValues={product} />
                      </ButtonModal>
                      <Button variant="outline-secondary" onClick={onDelete}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
