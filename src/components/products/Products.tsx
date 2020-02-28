import { Product } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from '../common/ButtonModal';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { ProductsProps } from './types/ProductsProps';
import { ProductRowContainer } from '../../containers/ProductRowContainer';
import { useProducts } from '../../hooks/useProducts';

export const Products = (props: ProductsProps) => {
  document.title = 'Products';
  useProducts();
  const { products } = props;

  const newProduct: Product = { name: '', price: '' };
  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product" body={<ProductFormContainer initialValues={newProduct} />} />
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
        <tbody>{products && products.map((product) => <ProductRowContainer key={product.id} product={product} />)}</tbody>
      </Table>
    </>
  );
};
