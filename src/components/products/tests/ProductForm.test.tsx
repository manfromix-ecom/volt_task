import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Product } from 'MyModels';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import store from '../../../store';
import { ProductForm } from '../ProductForm';
import { ProductFormContainer } from '../../../containers/ProductFormContainer';

let wrapper: any;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};
const newProduct: Product = { name: '', price: '' };

describe('ProductForm - Shallow Rendering', () => {
  beforeEach(() => {
    wrapper = shallow(<ProductForm initialValues={newProduct} setProduct={() => {}} />, providerOptions);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('inputs exists', () => {
    expect(wrapper.find('input').length).toBeGreaterThan(0);
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