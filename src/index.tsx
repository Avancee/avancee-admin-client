import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { init, RematchRootState } from '@rematch/core';
import * as models from './models/index';
import { Provider } from 'react-redux';

export const store = init({
  models
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
module.hot.accept();
