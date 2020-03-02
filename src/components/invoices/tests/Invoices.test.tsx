import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';
import { InvoicesContainer } from '../../../containers/InvoicesContainer';

let wrapper: any;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};

describe('InvoicesContainer - Full Rendering', () => {
  beforeEach(() => {
    wrapper = mount(<InvoicesContainer />, providerOptions);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('h1 exists', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  test('h1 text', () => {
    expect(wrapper.find('h1').text()).toMatch(/Invoice List/);
  });
});
