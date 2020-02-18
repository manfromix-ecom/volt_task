import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { withSuspense } from '../hoc/withSuspense';
import { Header } from './Header';
import './App.scss';

const Customers = React.lazy(() =>
  import('../containers/CustomersContainer').then(({ CustomersContainer }) => ({ default: CustomersContainer }))
);
const Products = React.lazy(() =>
  import('../containers/ProductsContainer').then(({ ProductsContainer }) => ({ default: ProductsContainer }))
);
const Invoices = React.lazy(() =>
  import('../containers/InvoicesContainer').then(({ InvoicesContainer }) => ({ default: InvoicesContainer }))
);

export const App: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/customers" render={withSuspense(Customers)} />
          <Route path="/products" render={withSuspense(Products)} />
          <Route path="/" render={withSuspense(Invoices)} />
        </Switch>
      </div>
    </>
  );
};
