import React from 'LibApp/react';
import ReactDOM from 'LibApp/react-dom';
import { Provider } from "LibApp/react-redux";
import App from './App';
import store from 'LibApp/store';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById(
    'root'
  )
);
