import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { Products } from '../components/products/Products';
import { ProductDispatchProps, ProductsStateProps } from '../components/products/types/ProductsProps';
import { deleteProductRequest } from '../store/products/actions';

const mapStateToProps = (state: Types.RootState): ProductsStateProps => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: ProductDispatchProps = Object.assign(
    {},
    {
      deleteProductRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const ProductsContainer = connect<ProductsStateProps, ProductDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(Products);
