import React from 'react';
import { withSuspense } from './hoc/withSuspense';

const Customers = React.lazy(() =>
  import('./containers/CustomersContainer').then(({ CustomersContainer }) => ({ default: CustomersContainer }))
);
const Products = React.lazy(() =>
  import('./containers/ProductsContainer').then(({ ProductsContainer }) => ({ default: ProductsContainer }))
);
const Invoices = React.lazy(() =>
  import('./containers/InvoicesContainer').then(({ InvoicesContainer }) => ({ default: InvoicesContainer }))
);
export const Routes = {
  '/': () => {
    withSuspense(Invoices);
  },
  '/customers': () => {
    withSuspense(Customers);
  },
  '/products': () => {
    withSuspense(Products);
  },
};
