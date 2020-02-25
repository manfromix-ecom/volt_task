import React from 'react';
import { connect } from 'react-redux';
import { ProductForm } from '../components/products/ProductForm';
import { createProductRequest, updateProductRequest } from '../features/products/reducer';
import { ProductFormContainerProps } from '../components/products/types/ProductsProps';

const FormContainer = (props: ProductFormContainerProps) => {
  const { product, setProduct, hideModal } = props;

  const onSubmit = (formData: any) => {
    const { name, price } = formData;
    hideModal();
    setProduct({ name, price, id: product.id });
  };
  return <ProductForm initialValues={product} onSubmit={onSubmit} />;
};

export const EditProductForm = connect(null, { setProduct: updateProductRequest })(FormContainer);
export const AddProductForm = connect(null, { setProduct: createProductRequest })(FormContainer);
