import * as actions from '../actions';
import * as types from '../constants';
import { Invoice } from '../../../models/Invoice';

describe('invoices actions', () => {
  const fakeInvoice: Invoice = { customerId: 2, discount: 5, total: 10, id: 1 };
  const newInvoice: Invoice = { customerId: 1, discount: 2, total: 3 };

  it('should create an action to set invoice', () => {
    const expectedAction = {
      type: types.SET_INVOICE,
      data: newInvoice,
    };
    expect(actions.setInvoiceCreator(newInvoice)).toEqual(expectedAction);
  });

  it('should create an action to create invoice', () => {
    const expectedAction = {
      type: types.CREATE_INVOICE,
      data: newInvoice,
    };
    expect(actions.addInvoiceCreator(newInvoice)).toEqual(expectedAction);
  });

  it('should create an action to delete invoice', () => {
    const expectedAction = {
      type: types.DELETE_INVOICE,
      data: fakeInvoice,
    };
    expect(actions.deleteInvoiceCreator(fakeInvoice)).toEqual(expectedAction);
  });

  it('should create an action to set invoices', () => {
    const invoices = [fakeInvoice];
    const expectedAction = {
      type: types.SET_INVOICES,
      data: invoices,
    };
    expect(actions.setInvoicesCreator(invoices)).toEqual(expectedAction);
  });
});
