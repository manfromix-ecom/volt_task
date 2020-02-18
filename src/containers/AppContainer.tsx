import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { App } from '../components/App';

const AppWithRouter = withRouter(App);

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </BrowserRouter>
  );
};
