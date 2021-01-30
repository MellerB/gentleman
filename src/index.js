import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TopBar from "./components/TopBar"
import ProductList from './components/ProductList';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cart from './components/Cart'


ReactDOM.render(
  <React.StrictMode>
    <TopBar/>
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,

  document.querySelector('body')
);


reportWebVitals();
