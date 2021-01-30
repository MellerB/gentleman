import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';

import TopBar from "./components/TopBar"
import Main from './pages/Main'
import Cart from './pages/Cart'
import Contact from './pages/Contact'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TopBar/>
      <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,

  document.querySelector('body')
);

