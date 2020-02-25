import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteProductRequest, loadProductsRequest } from '../features/products/reducer';
import { Products } from '../components/products/Products';
import { ProductDispatchProps, ProductsStateProps } from '../components/products/types/ProductsProps';

const mapStateToProps = (state: any): ProductsStateProps => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: ProductDispatchProps = Object.assign(
    {},
    {
      loadProductsRequest,
      deleteProductRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const ProductsContainer = connect<ProductsStateProps, ProductDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(Products);
