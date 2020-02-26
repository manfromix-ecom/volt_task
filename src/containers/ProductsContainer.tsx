import { connect } from 'react-redux';
import Types from 'MyTypes';
import { Products } from '../components/products/Products';
import { ProductDispatchProps, ProductsStateProps } from '../components/products/types/ProductsProps';

const mapStateToProps = (state: Types.RootState): ProductsStateProps => {
  return {
    products: state.products,
  };
};

export const ProductsContainer = connect<ProductsStateProps, ProductDispatchProps, {}, any>(mapStateToProps, {})(Products);
