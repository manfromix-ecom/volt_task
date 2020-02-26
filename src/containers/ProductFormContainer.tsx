import { connect } from 'react-redux';
import { ProductForm } from '../components/products/ProductForm';
import { setProduct } from '../features/products/actions';

export const ProductFormContainer = connect(null, { setProduct })(ProductForm);
