import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../common/ButtonModal';
import { EditProductForm } from '../../containers/ProductFormContainer';
import { ProductRowProps } from './types/ProductsProps';
import { deleteProductRequest } from '../../features/products/reducer';

export const ProductRow = (props: ProductRowProps) => {
  const { product, hideModal } = props;
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
          <ButtonModal title="Edit Product" buttonText="Edit" body={<EditProductForm product={product} hideModal={hideModal} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
