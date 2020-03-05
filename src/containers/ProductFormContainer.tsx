import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ProductForm } from '../components/products/ProductForm';
import { setProduct } from '../store/products/actions';
import { ProductFormDispatchProps, ProductFormStateProps } from '../components/products/types/ProductFormProps';

const mapStateToProps = (): ProductFormStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: ProductFormDispatchProps = Object.assign(
    {},
    {
      setProduct,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const ProductFormContainer = connect<ProductFormStateProps, ProductFormDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(ProductForm);
