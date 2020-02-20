import { Product } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal, useModal } from '../ButtonModal';
import { AddProductForm, EditProductForm } from '../../containers/ProductFormContainer';
import { deleteProductRequest } from '../../features/products/reducer';
import { ProductsProps } from './types/ProductsProps';

const ProductRow = ({ product, hideModal }: { product: Product; hideModal: () => void }) => {
  const { id, name, price } = product;
  const onDelete = () => {
    deleteProductRequest(product, id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Product" buttonText="Edit" body={<EditProductForm product={product} hideModal={hideModal} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

const PureProducts = (props: ProductsProps) => {
  document.title = 'Products';
  const { products } = props;

  const { hideModal } = useModal(true);

  const newProduct: Product = { name: '', price: '' };

  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product" body={<AddProductForm product={newProduct} hideModal={hideModal} />} />
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
            <ProductRow key={product.id} product={product} hideModal={hideModal} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const Products = React.memo(PureProducts);
