import { connect } from 'react-redux';
import Types from 'MyTypes';
import { ProductsOptionsDispatchProps, ProductsOptionsStateProps } from '../components/common/types/ProductsOptionsProps';
import { ProductOptions } from '../components/common/ProductsOptions';

const mapStateToProps = (state: Types.RootState): ProductsOptionsStateProps => {
  return {
    products: state.products,
  };
};

export const ProductOptionsContainer = connect<ProductsOptionsStateProps, ProductsOptionsDispatchProps>(
  mapStateToProps,
  {}
)(ProductOptions);
