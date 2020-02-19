import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProductForm } from '../components/products/ProductForm';
import { createUpdateProductRequest } from '../features/products/reducer';
import { ProductProps } from '../components/products/types/ProductsProps';
import { ProductContainerProps } from './types/ProductContainerProps';

const FormContainer = (props: ProductContainerProps) => {
  const { product, setProduct } = props;
  const RxForm = reduxForm<{}, ProductProps>({ form: 'productForm', initialValues: product, enableReinitialize: true })(ProductForm);
  const onSubmit = (formData: any) => {
    const { name, price } = formData;
    setProduct({ name, price });
  };

  return <RxForm product={product} onSubmit={onSubmit} />;
};

export const ProductFormContainer = connect(null, { setProduct: createUpdateProductRequest })(FormContainer);
