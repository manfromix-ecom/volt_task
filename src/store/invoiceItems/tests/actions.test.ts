import * as actions from '../actions';
import * as types from '../constants';
import { InvoiceItem } from '../../../models/InvoiceItem';

describe('invoiceItems actions', () => {
  const fakeInvoiceItem: InvoiceItem = { productId: 1, invoiceId: 1, quantity: 10, id: 1 };
  const newInvoiceItem: InvoiceItem = { productId: 3, invoiceId: 2, quantity: 20 };

  it('should create an action to set invoiceItem', () => {
    const expectedAction = {
      type: types.SET_INVOICE_ITEM,
      data: newInvoiceItem,
    };
    expect(actions.setInvoiceItemCreator(newInvoiceItem)).toEqual(expectedAction);
  });

  it('should create an action to create invoiceItem', () => {
    const expectedAction = {
      type: types.CREATE_INVOICE_ITEM,
      data: newInvoiceItem,
    };
    expect(actions.addInvoiceItemCreator(newInvoiceItem)).toEqual(expectedAction);
  });

  it('should create an action to delete invoiceItem', () => {
    const expectedAction = {
      type: types.DELETE_INVOICE_ITEM,
      data: fakeInvoiceItem,
    };
    expect(actions.deleteInvoiceItemCreator(fakeInvoiceItem)).toEqual(expectedAction);
  });

  it('should create an action to set invoiceItems', () => {
    const invoiceItems = [fakeInvoiceItem];
    const expectedAction = {
      type: types.SET_INVOICE_ITEMS,
      data: invoiceItems,
    };
    expect(actions.setInvoiceItemsCreator(invoiceItems)).toEqual(expectedAction);
  });
});
