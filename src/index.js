import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';

import TopBar from "./components/TopBar"
import Main from './pages/Main'
import Cart from './pages/Cart'


ReactDOM.render(
  <React.StrictMode>
    <TopBar/>
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,

  document.querySelector('body')
);

