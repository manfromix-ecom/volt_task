import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';
import { CustomersContainer } from '../../../containers/CustomersContainer';

let wrapper: ReactWrapper;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};

describe('CustomersContainer - Full Rendering', () => {
  beforeEach(() => {
    wrapper = mount(<CustomersContainer />, providerOptions);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('h1 exists', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  test('h1 text', () => {
    expect(wrapper.find('h1').text()).toMatch(/Customer List/);
  });
});
