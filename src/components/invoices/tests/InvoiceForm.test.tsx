import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import store from '../../../store';
import { InvoiceForm } from '../InvoiceForm';
import { InvoiceItems } from '../../invoiceItems/InvoiceItems';
import { InvoiceFormContainer } from '../../../containers/InvoiceFormContainer';
import { Invoice } from '../../../models/Invoice';

let shallowWrapper: ShallowWrapper;
let wrapper: ReactWrapper;
const providerOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { store },
};

const newInvoice: Invoice = { customerId: 0, discount: 0, total: 0 };
describe('InvoiceForm - Shallow Rendering', () => {
  beforeEach(() => {
    shallowWrapper = shallow(<InvoiceForm initialValues={newInvoice} setInvoiceWithItems={() => {}} />, providerOptions);
  });

  test('renders', () => {
    expect(shallowWrapper.exists()).toBe(true);
  });

  test('inputs exists', () => {
    expect(shallowWrapper.find('input').length).toBeGreaterThan(0);
  });

  test('h5 exists', () => {
    expect(shallowWrapper.find('h5').length).toEqual(1);
  });

  test('h5 text', () => {
    expect(shallowWrapper.find('h5').text()).toMatch(/Total: 0/);
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
