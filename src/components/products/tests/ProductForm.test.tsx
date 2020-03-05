import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import store from '../../../store';
import { ProductForm } from '../ProductForm';
import { ProductFormContainer } from '../../../containers/ProductFormContainer';
import { Product } from '../../../models/Product';

let shallowWrapper: ShallowWrapper;
let wrapper: ReactWrapper;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};
const newProduct: Product = { name: '', price: 0 };

describe('ProductForm - Shallow Rendering', () => {
  beforeEach(() => {
    shallowWrapper = shallow(<ProductForm initialValues={newProduct} setProduct={() => {}} />, providerOptions);
  });

  test('renders', () => {
    expect(shallowWrapper.exists()).toBe(true);
  });

  test('inputs exists', () => {
    expect(shallowWrapper.find('input').length).toBeGreaterThan(0);
  });
});

describe('ProductFormContainer - Full Rendering', () => {
  beforeEach(() => {
    wrapper = mount(<ProductFormContainer initialValues={newProduct} />, providerOptions);
  });

  test('Buttons exists', () => {
    expect(wrapper.find(Button).length).toBeGreaterThan(0);
  });

  test('Form.Controls exists', () => {
    expect(wrapper.find(Form.Control).length).toBeGreaterThan(0);
  });
});
