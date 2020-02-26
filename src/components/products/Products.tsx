import { Product } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal } from '../common/ButtonModal';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { ProductsProps } from './types/ProductsProps';
import { ProductRowContainer } from '../../containers/ProductRowContainer';
import { useProducts } from '../../hooks/useProducts';
import { useModal } from '../../hooks/useModal';

export const Products = (props: ProductsProps) => {
  document.title = 'Products';
  const { products } = props;
  useProducts(products);
  const { hideModal } = useModal(true);

  const newProduct: Product = { name: '', price: '' };
  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product" body={<ProductFormContainer initialValues={newProduct} hideModal={hideModal} />} />
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
          {products && products.map((product) => <ProductRowContainer key={product.id} product={product} hideModal={hideModal} />)}
        </tbody>
      </Table>
    </>
  );
};
