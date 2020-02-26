import { Product } from 'MyModels';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonModal, useModal } from '../common/ButtonModal';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { ProductsProps } from './types/ProductsProps';
import { ProductRow } from './ProductRow';

export const Products = (props: ProductsProps) => {
  document.title = 'Products';
  const { products, loadProductsRequest } = props;
  const [reloadEmpty, setReloadEmpty] = useState(false);
  if (!reloadEmpty && !products.length) {
    setReloadEmpty(true);
    loadProductsRequest();
  }
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
        <tbody>{products && products.map((product) => <ProductRow key={product.id} product={product} hideModal={hideModal} />)}</tbody>
      </Table>
    </>
  );
};
