import React from 'react';
import { connect } from 'react-redux';
import { ProductForm } from '../components/products/ProductForm';
import { createProductRequest, updateProductRequest } from '../features/products/reducer';
import { ProductContainerProps } from './types/ProductContainerProps';

const FormContainer = (props: ProductContainerProps) => {
  const { product, setProduct, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { name, price } = formData;
    console.log('formData', formData, product);
    hideModal();
    setProduct({ name, price, id: product.id }, product.id);
  };
  return <ProductForm initialValues={product} onSubmit={onSubmit} />;
};

export const EditProductForm = connect(null, { setProduct: updateProductRequest })(FormContainer);
export const AddProductForm = connect(null, { setProduct: createProductRequest })(FormContainer);
