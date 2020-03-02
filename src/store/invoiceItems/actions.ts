import { InvoiceItem } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_INVOICE_ITEM_REQUEST, DELETE_INVOICE_ITEM_REQUEST, SET_INVOICE_ITEM_REQUEST, SET_INVOICE_ITEMS } from './constants';
import { invoiceItemsAPI } from '../../api/invoice-items-api';

export const addInvoiceItemCreator = (invoiceItem: InvoiceItem) => ({ type: CREATE_INVOICE_ITEM_REQUEST, data: invoiceItem });
export const deleteInvoiceItemCreator = (invoiceItem: InvoiceItem) => ({ type: DELETE_INVOICE_ITEM_REQUEST, data: invoiceItem });
export const setInvoiceItemCreator = (invoiceItem: InvoiceItem) => ({ type: SET_INVOICE_ITEM_REQUEST, data: invoiceItem });
export const setInvoiceItemsCreator = (invoiceItems: InvoiceItem[]) => ({ type: SET_INVOICE_ITEMS, data: invoiceItems });

export const deleteInvoiceItemRequest = (invoiceItem: InvoiceItem) => {
  return (dispatch: Dispatch<any>) => {
    invoiceItemsAPI
      .delete(invoiceItem)
      .then(() => dispatch(deleteInvoiceItemCreator(invoiceItem)))
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
};
export const createInvoiceItemRequest = (invoiceItem: InvoiceItem) => {
  return async (dispatch: Dispatch<any>) => {
    const data: any = await invoiceItemsAPI.create(invoiceItem);
    if (data.data && data.data.id) invoiceItem.id = data.data.id;
    dispatch(addInvoiceItemCreator(invoiceItem));
  };
};
export const updateInvoiceItemRequest = (invoiceItem: InvoiceItem) => {
  return async (dispatch: Dispatch<any>) => {
    await invoiceItemsAPI.update(invoiceItem);
    dispatch(setInvoiceItemCreator(invoiceItem));
  };
};
export const loadInvoiceItemsRequest = (invoiceId: number) => {
  return (dispatch: Dispatch<any>) => {
    invoiceItemsAPI
      .index(invoiceId)
      .then((data) => {
        const invoiceItems = data || [];
        dispatch(setInvoiceItemsCreator(invoiceItems));
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
};

export const setInvoiceItem = (formData: any) => {
  return (dispatch: Dispatch<any>) => {
    const { invoiceId, productId, quantity, id } = formData;
    if (id) {
      dispatch(updateInvoiceItemRequest({ invoiceId, productId, quantity, id }));
    } else {
      dispatch(createInvoiceItemRequest({ invoiceId, productId, quantity }));
    }
  };
};
