import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Customer } from 'MyModels';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import store from '../../../store';
import { CustomerForm } from '../CustomerForm';
import { CustomerFormContainer } from '../../../containers/CustomerFormContainer';

let wrapper: any;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};
const newCustomer: Customer = { name: '', address: '', phone: '' };

describe('CustomerForm - Shallow Rendering', () => {
  beforeEach(() => {
    wrapper = shallow(<CustomerForm initialValues={newCustomer} setCustomer={() => {}} />, providerOptions);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('inputs exists', () => {
    expect(wrapper.find('input').length).toBeGreaterThan(0);
  });
});

describe('CustomerFormContainer - Full Rendering', () => {
  beforeEach(() => {
    wrapper = mount(<CustomerFormContainer initialValues={newCustomer} />, providerOptions);
  });

  test('Buttons exists', () => {
    expect(wrapper.find(Button).length).toBeGreaterThan(0);
  });

  test('Form.Controls exists', () => {
    expect(wrapper.find(Form.Control).length).toBeGreaterThan(0);
  });
});