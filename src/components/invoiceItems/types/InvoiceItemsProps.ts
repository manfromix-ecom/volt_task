import { useFormik } from 'formik';
import { InvoiceItem } from '../../../models/InvoiceItem';
import { Product } from '../../../models/Product';

export interface InvoiceItemsStateProps {
  invoiceItems: Array<InvoiceItem>;
  products: Array<Product>;
}

export interface InvoiceItemsDispatchProps {}

export interface InvoiceItemsProps extends InvoiceItemsDispatchProps, InvoiceItemsStateProps {
  invoiceId: number;
  form: {
    handleChange: ReturnType<typeof useFormik>['handleChange'];
  };
}
