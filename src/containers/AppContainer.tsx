import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/redux-store';
import {App} from '../components/App';

export const AppContainer = () => {
  return <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
};
