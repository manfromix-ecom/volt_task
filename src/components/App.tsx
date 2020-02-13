import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from '@reach/router';
import { withSuspense } from '../hoc/withSuspense';
import { Header } from './Header';

const Invoices = React.lazy(() => import('./invoices/Invoices').then(({ Invoices }) => ({ default: Invoices })));
const Products = React.lazy(() => import('./products/Products').then(({ Products }) => ({ default: Products })));
const Customers = React.lazy(() => import('./customers/Customers').then(({ Customers }) => ({ default: Customers })));
const InvoiceForm = React.lazy(() => import('./invoices/InvoiceForm').then(({ InvoiceForm }) => ({ default: InvoiceForm })));

export const App: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/customers" render={withSuspense(Customers)} />
          <Route path="/products" render={withSuspense(Products)} />
          <Route path="/invoices/:id/edit" render={withSuspense(InvoiceForm)} />
          <Route path="/" render={withSuspense(Invoices)} />
        </Switch>
      </div>
    </>
  );
};
