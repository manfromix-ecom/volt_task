import React from 'react';
import { connect } from 'react-redux';
import { Product } from 'MyModels';
import { reduxForm } from 'redux-form';
import { ProductForm, Props } from '../components/products/ProductForm';
import { createUpdateProductRequest } from '../features/products/reducer';

interface ContainerProps {
  product: Product;
  setProduct: (product: Product) => void;
}

const FormContainer = (props: ContainerProps) => {
  const { product, setProduct } = props;
  const RxForm = reduxForm<{}, Props>({ form: 'product_form', initialValues: product, enableReinitialize: true })(ProductForm);
  const onSubmit = (formData: any) => {
    const { name, price } = formData;
    setProduct({ name, price });
  };

  return <RxForm product={product} onSubmit={onSubmit} />;
};

export const ProductFormContainer = connect(null, { setProduct: createUpdateProductRequest })(FormContainer);
