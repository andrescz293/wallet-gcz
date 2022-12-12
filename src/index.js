import React from 'react';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

const initialValue = []

const reducer = (state = initialValue ,action) => {
  return state
}

const store = createStore(reducer)


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
