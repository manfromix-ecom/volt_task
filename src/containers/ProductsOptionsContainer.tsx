import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { ProductsOptionsDispatchProps, ProductsOptionsStateProps } from '../components/common/types/ProductsOptionsProps';
import { ProductOptions } from '../components/common/ProductsOptions';

const mapStateToProps = (state: Types.RootState): ProductsOptionsStateProps => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: ProductsOptionsDispatchProps = Object.assign({}, {});
  return bindActionCreators(combinedActions as any, dispatch);
};

export const ProductOptionsContainer = connect<ProductsOptionsStateProps, ProductsOptionsDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(ProductOptions);
