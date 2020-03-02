import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Invoice } from 'MyModels';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import store from '../../../store';
import { InvoiceForm } from '../InvoiceForm';
import { InvoiceItems } from '../../invoiceItems/InvoiceItems';
import { InvoiceFormContainer } from '../../../containers/InvoiceFormContainer';

let wrapper: any;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};
const newInvoice: Invoice = { customerId: 0, discount: 0, total: 0 };

describe('InvoiceForm - Shallow Rendering', () => {
  beforeEach(() => {
    wrapper = shallow(<InvoiceForm initialValues={newInvoice} setInvoiceWithItems={() => {}} />, providerOptions);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('inputs exists', () => {
    expect(wrapper.find('input').length).toBeGreaterThan(0);
  });

  test('h5 exists', () => {
    expect(wrapper.find('h5').length).toEqual(1);
  });

  test('h5 text', () => {
    expect(wrapper.find('h5').text()).toMatch(/Total: 0/);
  });
});

describe('InvoiceFormContainer - Full Rendering', () => {
  beforeEach(() => {
    wrapper = mount(<InvoiceFormContainer initialValues={newInvoice} />, providerOptions);
  });

  test('InvoiceItems exists', () => {
    expect(wrapper.find(InvoiceItems).length).toEqual(1);
  });

  test('Buttons exists', () => {
    expect(wrapper.find(Button).length).toBeGreaterThan(0);
  });

  test('Form.Controls exists', () => {
    expect(wrapper.find(Form.Control).length).toBeGreaterThan(0);
  });
});