import { connect } from 'react-redux';
import { deleteProductRequest } from '../store/products/actions';
import { ProductRow } from '../components/products/ProductRow';

export const ProductRowContainer = connect(null, { deleteProductRequest })(ProductRow);
